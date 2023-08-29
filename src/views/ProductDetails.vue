<template>
  <div class="product-details">
    <div class="product-details__info">
      <div>{{ product.name }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.description }}</div>
    </div>
    <img :src="product.cover" alt="cover"/>
    <div class="product-details__control">
      <button @click="router.replace('/')">Перейти в витрину</button>
      <button v-show="!hasBasket" @click="setBasket"><img
        src="../assets/basket-plus.svg"
        alt="basket"/></button>
      <button v-show="hasBasket"><img src="../assets/basket-check.svg" alt="basket"/></button>
      <button @click="openModal">Посмотреть корзину</button>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useStore();

const productId = ref(route.params.id);
const hasBasket = ref(false);
const product = computed(() => store.getters.getProductById(productId.value));

const openModal = () => {
  store.commit('setShowModal', true);
};

const setBasket = () => {
  store.commit('addBasketsProducts', product.value);
  hasBasket.value = true;
};

</script>

<style lang="scss" scoped>
.product-details {
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  &__control {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;

    button, div {
      img {
        width: 48px;
        height: 48px;
      }
    }
  }

  &__info {
    background-color: deepskyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }

  img {
    max-height: 600px;
    max-width: 800px;
  }
}
</style>
