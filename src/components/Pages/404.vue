<script setup>
import { useRouter } from 'vue-router';
import Nav from '../Nav.vue'

const router = useRouter();

</script>

<template>
    <keep-alive><Nav/></keep-alive>
    <div class="not-found">
        
        <h1>404</h1>
        <h2>抱歉，你访问的页面不存在。</h2>
        <router-link to="/"><h3>返回主页</h3></router-link>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    /* padding: 40%; */
    margin-top: 250px;
}
</style>