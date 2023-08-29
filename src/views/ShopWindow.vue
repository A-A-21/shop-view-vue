<template>
  <div class="shop-window">
    <template v-if="getRandomProducts.length < 3">
      <div class="shop-window__list">
        <div class="shop-window__product"
             v-for="product in getRandomProducts" :key="product.id">
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
    </template>
    <template v-else>
      <div v-if="getRandomProducts.length !== 3" class="shop-window__btns">
        <button @click="leftSlide" class="shop-window__left-button"
                :class="{ blur: currentIndex === 0}"><img
          src="../assets/arrow-up-circle.svg" alt="arrow"></button>
        <button @click="rightSlide" class="shop-window__right-button"
                :class="{ blur: currentIndex === getRandomProducts.length - 3}"><img
          src="../assets/arrow-up-circle.svg" alt="arrow"></button>
      </div>
      <div class="shop-window__list">
        <div class="shop-window__product"
             v-for="product in getRandomProducts.slice(currentIndex, currentIndex+3)"
             :key="product.id">
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
    </template>
    <button @click="openModal">Посмотреть корзину</button>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

const store = useStore();
const currentIndex = ref(0);
const getRandomProducts = computed(() => store.getters.getRandomProducts);

const openModal = () => {
  store.commit('setShowModal', true);
};

function leftSlide() {
  if (currentIndex.value !== 0) {
    currentIndex.value -= 1;
  }
}

function rightSlide() {
  if (currentIndex.value + 3 < getRandomProducts.value.length) {
    currentIndex.value += 1;
  }
}

</script>

<style lang="scss" scoped>

.blur {
  filter: blur(4px);
}

.shop-window {
  width: 100%;
  height: 100%;

  > button {
    position: absolute;
    top: 3%;
    left: 3%;
    background-color: aqua;
  }

  &__list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;

    button:last-child {
      img {
        width: 48px;
        height: 48px;
        rotate: 90deg;
      }
    }

    button:first-child {
      img {
        width: 48px;
        height: 48px;
        rotate: -90deg;
      }
    }
  }

  &__product {
    width: 100%;
  }

}
</style>
