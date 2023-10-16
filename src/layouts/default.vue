<script setup lang='ts'>
import { RouterView } from "vue-router";
import NavBar from '@/components/global/navbar/navbar.vue'
import Footer from '@/components/global/footer/footer.vue'
</script>
<template>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Footer></Footer>
</template>
<style scoped></style>