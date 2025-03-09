<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageurl" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
      <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
      <button class="sign-in" v-if="!user" @click="signIn">Sing in to add to cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue'

export default {
  name: "ProductDetailPage",
  props: ['user'],
  data() {
    return {
      product: {},
      cartItems: Array.from([]),
    }
  },
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn');
      await signInWithEmailLink(auth, email, window.location.href)
      alert('Successfully signed in!');
      window.localStorage.removeItem('emailForSignIn');
    }
    
    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    if (this.user) {
      const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = Array.from(cartResponse.data);
      this.cartItems = cartItems;
    }
  },
  components: {
    NotFoundPage
  },
  methods: {
    async addToCart() {
      if (this.user) {
        try {
          await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId });
          alert('Successfully added item to cart!');
        } catch (error) {
          alert(error.response.data); // NOTE - use "error.response.data` (not "error")
        }
      }
    },
    async signIn() {
      const email = prompt("Please enter your e-mail to sign in:");
      const auth = getAuth();
      const actionCodeSettings = { 
        // url: `http://localhost:8080/products/${this.$route.params.productId}`,
        url: `https://vuejs-fullstack.onrender.com/products/${this.$route.params.productId}`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert('A login link was sent to the email you provided');
      window.localStorage.setItem('emailForSignIn', email);
    }
  },
  computed: {
    itemIsInCart() {
      const pr_id = parseInt(this.$route.params.productId);
      let has_item = false;
      if (this.user) {
         has_item = this.cartItems.some(item => item.id === pr_id) || false;
      }      // alert(has_item)
      return has_item;
    }
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
        const cartItems = Array.from(cartResponse.data);
        this.cartItems = cartItems;
      }
    }
  }
}
</script>