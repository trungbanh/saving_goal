<script setup lang="ts">
import NavbarHome from './components/NavbarHome.vue'
</script>

<template>
  <NavbarHome></NavbarHome>

  <main class="main-bg main-container">

  </main>
</template>

<style scoped>
.text-rubik {
  font-family: rubik;
}

.text-work_sans {
  font-family: work_sans;
}

.main-bg {
  background-color: #f4f8fa
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
