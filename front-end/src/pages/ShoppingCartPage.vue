<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-else>
    You currently have no items in your cart!
  </div>
</template>

<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: "ShoppingCartPage",
  props: ['user'],
  data() {
    return {
      cartItems: [],
    }
  },
  async created() {
    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  },
  components: {
    ShoppingCartList,
  },
  methods: {
    async removeFromCart(productId) {
      const pr_id = parseInt(productId);
      const response = await axios.delete(`/api/users/${this.user.uid}/cart/${pr_id}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
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