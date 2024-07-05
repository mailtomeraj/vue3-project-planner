<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <header>   
    <div class="wrapper">
    <Navbar/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
