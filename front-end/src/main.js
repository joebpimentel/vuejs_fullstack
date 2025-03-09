import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAtejybbXxN558G5XPAJRoxj9Cvh56zXc",
  authDomain: "vuecourse-f7e03.firebaseapp.com",
  projectId: "vuecourse-f7e03",
  storageBucket: "vuecourse-f7e03.firebasestorage.app",
  messagingSenderId: "603904476277",
  appId: "1:603904476277:web:4efbb955872032eae9243c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
