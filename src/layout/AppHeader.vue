<template>
  <header class="header flex flex-none p-6">
    <!-- <div class="logo"></div> -->
    <img src="../assets/logo.svg" alt="logo" class="logo">
    <button 
      class="sm:hidden ml-auto trigger-sidebar-btn flex flex-col justify-center"
      @click="onClick"
    >
      <span class="bar first-bar"></span>
      <span class="bar second-bar"></span>
      <span class="bar third-bar"></span>
    </button>
  </header>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const triggerBtnClick = reactive({
  isClicked: false
});
const emit = defineEmits(['trigger-btn-click']);

const onClick = () => {
  triggerBtnClick.isClicked = !triggerBtnClick.isClicked;
  emit('trigger-btn-click', triggerBtnClick.isClicked)
}
</script>

<style>
.header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e9e9e9;
}

.logo {
  width: 140px;
  height: 42px;
}

.bar {
  width: 30px;
  height: 2px;
  background: #000;
}

.first-bar, .second-bar {
  margin-bottom: 8px;
}
</style>
