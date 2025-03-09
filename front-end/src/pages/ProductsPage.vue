<template>
  <h1>Products</h1>
  <ProductsList :products="products"/>
</template>

<script>
import axios from 'axios';
import ProductsList from '@/components/ProductsList.vue';

export default {
  name: "ProductsPage",
  data() {
    return {
      products: [],
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    const products = response.data;
    this.products = products;
  },
  components: { 
    ProductsList,
  }
}
</script>