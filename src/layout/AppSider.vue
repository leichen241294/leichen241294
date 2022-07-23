<template>
  <aside class="sidebar hidden sm:flex">
    Sidebar
  </aside>
  <aside 
    class="sidebar sidebar-mobile sm:hidden"
    :class="[isTriggerSidebarBtnClicked ? 'toggle-on-sidebar' : 'toggle-off-sidebar']"
  >
    <span>Sidebar</span>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  isTriggerSidebarBtnClicked: Boolean
});
</script>

<style>
.sidebar {
  min-width: 200px;
  max-width: 200px;
  background: #fff;
}

.sidebar-mobile {
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
}

.toggle-on-sidebar {
  transform: translateX(0px);
  transition: transform 0.5s ease-in-out;
}

.toggle-off-sidebar {
  transform: translateX(-200px);
  transition: transform 0.5s ease-in-out;
}
</style>