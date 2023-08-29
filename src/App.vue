<template>
  <router-view/>
  <BaseModal v-if="showModal">
    <ShopsBasket></ShopsBasket>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@/components/BaseModal.vue';
import ShopsBasket from '@/components/ShopsBasket.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const showModal = computed(() => store.getters.isShowModal);

</script>

<style lang="scss">
#app {
  height: 800px;
  width: 1280px;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
