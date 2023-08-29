<template>
  <div class="product-card">
    <button @click="router.replace(`/details/${product.id}`)">
      <div class="product-card__info">
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
      </div>
      <img :src="product.cover" alt="product"/>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import router from '@/router';

defineProps({
  product: Object,
});
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s ease;
    border: 1px solid cornflowerblue;
  }

  &__info {
    background-color: deepskyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 700px;
    display: flex;
    margin: auto;
  }
}
</style>
