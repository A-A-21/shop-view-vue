<template>
  <div class="shops-basket">
    <div class="shops-basket__close">
      <button @click="closeModal"><img src="../assets/window-close.svg" alt="closeModal"></button>
    </div>
    <template v-if="products.length > 0">
      <div class="shops-basket__list">
        <div v-for="product in products" :key="product.id" class="shops-basket__item">
          <div class="shops-basket__info">
            <div class="shops-basket__name">
              Название: {{ product.name }}
            </div>
            <div class="shops-basket__count">
              Количество: {{ product.count }}
            </div>
          </div>
          <div class="shops-basket__control">
            <button class="shops-basket__control__item" @click="incrementCount(product)">
              Добавить
            </button>
            <button class="shops-basket__control__item" @click="decrementCount(product)">
              Убавить
            </button>
            <button class="shops-basket__control__item" @click="deleteProduct(product.id)">
              Удалить из корзины
            </button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>Корзина пуста</div>
    </template>
  </div>
</template>

<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const products = computed(() => store.getters.getBasketsProducts);

const incrementCount = (product) => {
  store.commit('addBasketsProducts', product);
};

const decrementCount = (product) => {
  if (product.count === 1) {
    store.commit('deleteBasketsProduct', product.id);
  } else {
    store.commit('setBasketsProducts', product.id);
  }
};

const deleteProduct = (id) => {
  store.commit('deleteBasketsProduct', id);
};
const closeModal = () => {
  store.commit('setShowModal', false);
};
</script>

<style lang="scss" scoped>
.shops-basket {
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    display: flex;
    gap: 100px;
    border: 1px solid cadetblue;
    border-radius: 4px;
    padding: 4px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__close {
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      width: 36px;
      height: 36px;
    }
  }

  &__control {
    display: flex;
    width: 100%;
    gap: 50px;

    &__item {
      width: 100%;
      height: 90%;
      border: 1px solid blue;
      border-radius: 8px;
      background-color: deepskyblue;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
