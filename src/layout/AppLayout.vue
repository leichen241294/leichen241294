<template>
  <div class="layout flex flex-col min-h-screen">
    <AppHeader @trigger-btn-click="onTriggerSidebarBtnClick($event)"/>
    <div class="flex flex-auto">
      <AppSider :is-trigger-sidebar-btn-clicked="state.isSidebarBtnClicked" />
      <main class="content flex">
        <div class="m-6 bg-white">
          <RouterView />
        </div>
      </main>
    </div>
    <AppFooter />

    <div 
      :class="{ 'sidebar-mobile-overlay': state.isSidebarBtnClicked }"
      @click="onOverlayClick"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { RouterView  } from 'vue-router';

import AppHeader from '../layout/AppHeader.vue';
import AppFooter from '../layout/AppFooter.vue';
import AppSider from '../layout/AppSider.vue';
import { reactive } from 'vue';

const state = reactive({
  isSidebarBtnClicked: false
});

const onTriggerSidebarBtnClick = (value: boolean) => {
  state.isSidebarBtnClicked = value;
}

const onOverlayClick = () => {
  state.isSidebarBtnClicked = !state.isSidebarBtnClicked;
}
</script>

<style>
.content {
  max-width: 100vw;
}

.sidebar-mobile-overlay {
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
}
</style>


