import { createRouter, createWebHashHistory } from 'vue-router';
import ProductDetails from '@/views/ProductDetails.vue';
import ShopWindow from '@/views/ShopWindow.vue';

const routes = [
  {
    path: '/',
    name: 'shopWindow',
    component: ShopWindow,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
