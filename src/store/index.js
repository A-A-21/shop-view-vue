import { createStore } from 'vuex';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const products = [
  {
    id: '5b2760ac4613bc8ecb5693f6',
    name: 'name4',
    cover: './img/92a50329-cd3f-4fad-bc8f-04bca02e952e.jpg',
    price: 300,
    description: 'green',
  },
  {
    id: '5b2760ace5b025b50a1f7d87',
    name: 'name4',
    cover: './img/b259dd17-3bfa-4e62-9335-8e10944c12d2.jpg',
    price: 850,
    description: 'brown',
  },
  {
    id: '5b2760ac74f355323578d65a',
    name: 'name1',
    cover: './img/52cf4552-f244-47f5-87d8-1e10e74e03e4.jpg',
    price: 400,
    description: 'blue',
  },
  {
    id: '5b2760acfb01a505d3ac3139',
    name: 'name4',
    cover: './img/7fb36f8e-4842-4316-ba43-6fb8a79c54be.jpg',
    price: 1015,
    description: 'blue',
  },
  {
    id: '5b2760acadaaef2ce88a7ada',
    name: 'name2',
    cover: './img/16eb4503-7408-436d-87f9-7fc458aa98cc.jpg',
    price: 700,
    description: 'blue',
  },
  {
    id: '5b2760acec7c62d65dd1f1cb',
    name: 'name3',
    cover: './img/e5134e24-2b59-43eb-8e8d-fb20508b7b01.jpg',
    price: 700,
    description: 'brown',
  },
  {
    id: '5b2760ac89c7d290344e967e',
    name: 'name2',
    cover: './img/2c2a6588-7dc8-403b-b221-80ffc688bf0d.jpg',
    price: 200,
    description: 'brown',
  },
  {
    id: '5b2760ac1f5a45bb433bd7ee',
    name: 'name2',
    cover: './img/a38d4311-823a-44e1-a840-2318fc7b9d83.jpg',
    price: 850,
    description: 'brown',
  },
  {
    id: '5b2760ac087565373183b563',
    name: 'name3',
    cover: './img/b080d7a6-a0d2-4e32-87d6-95454b259649.jpg',
    price: 300,
    description: 'brown',
  },
  {
    id: '5b2760aca074a48f5ac53250',
    name: 'name1',
    cover: './img/0ffbdb30-9d8d-45b3-86c9-a09a06112845.jpg',
    price: 200,
    description: 'blue',
  },
];
export default createStore({
  state: {
    products,
    showModal: false,
    basketsProducts: [],
  },
  getters: {
    isShowModal: (state) => state.showModal,
    getRandomProducts: (state) => {
      const shuffleProducts = _.shuffle(state.products);
      const randomCount = _.random(1, 10);
      return shuffleProducts.slice(0, randomCount);
    },
    getProductById: (state) => (id) => state.products.find((product) => product.id === id),
    getBasketsProducts: (state) => state.basketsProducts,
    // eslint-disable-next-line max-len
    isHasBasketsProducts: (state) => (id) => state.basketsProducts.some((product) => product.id === id),
  },
  mutations: {
    setShowModal(state, value) {
      state.showModal = value;
    },
    addBasketsProducts(state, newProduct) {
      const hasNewProduct = state.basketsProducts.some((product) => product.id === newProduct.id);
      if (hasNewProduct) {
        state.basketsProducts = state.basketsProducts.map((product) => {
          if (product.id === newProduct.id) {
            // eslint-disable-next-line no-param-reassign
            product.count += 1;
            return product;
          }
          return product;
        });
      } else {
        const product = { ...newProduct, count: 1 };
        state.basketsProducts = [...state.basketsProducts, product];
      }
    },
    setBasketsProducts(state, id) {
      state.basketsProducts = state.basketsProducts.map((product) => {
        if (product.id === id) {
          // eslint-disable-next-line no-param-reassign
          product.count -= 1;
          return product;
        }
        return product;
      });
    },
    deleteBasketsProduct(state, productId) {
      state.basketsProducts = state.basketsProducts.filter(({ id }) => id !== productId);
    },
  },
  actions: {},
  modules: {},
});
