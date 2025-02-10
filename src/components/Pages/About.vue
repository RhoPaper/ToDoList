<script setup>
import Nav from '../Nav.vue';
import COP from '../ConsoleOutput.vue';
</script>
<template>
    <keep-alive><Nav/></keep-alive>
    <div class="main-about"><h2>由<a href="https://rhopaper.top/about">RhoPaper</a>改编自B站UP主“三分钟实验室”的<a href="https://www.bilibili.com/video/BV1gU411Z7pp?vd_source=9427d29de636ed98bef2a0f959dc2087">【十分钟入门vue】</a>中所出现的练习项目</h2></div>
    <COP/>
</template>

<style>
.main-about{
    color: #fff;
    text-align: center;
    margin-top: 20%;
}
a {
    color: aquamarine;
    text-decoration: none;
}
</style>