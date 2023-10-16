<script setup lang="ts">
import NavbarHome from './components/NavbarHome.vue'
import HomeCard from './components/HomeCard.vue'
</script>

<template>
  <div class="main-page">
    <NavbarHome></NavbarHome>

    <main class="main-bg main-container">
      <HomeCard></HomeCard>
    </main>
  </div>
</template>

<style scoped>
.main-page {
  height: 100vh;
}

.main-bg {
  background-color: #f4f8fa
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 89%;
}
</style>
