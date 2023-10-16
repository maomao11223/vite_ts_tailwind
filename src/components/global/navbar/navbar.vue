<script setup lang='ts'>
import { ref } from 'vue'
const menu = ref([{
    title: 'Home',
    to: { name: 'dashboardHome' }
}, {
    title: 'todo',
    to: {
        name: 'manageTodo'
    }
}])
</script>
<template>
    <nav class=" w-full  bg-slate-800 flex py-6">
        <div class="lg:container flex mx-auto justify-between">

            <div class=" w-1/4 text-white">logo</div>
            <div>
                <ul class="text-white flex">
                    <li class=" mr-6" v-for="M in menu" :key="M">
                        <router-link :to="M.to">

                            {{ M.title }}
                        </router-link>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped></style>