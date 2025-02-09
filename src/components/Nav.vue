<script>
export default {
    data() {
        return {
        isSameDomainReferer: false
        };
    },
    mounted() {
        this.checkReferer();
    },
    methods: {
        checkReferer() {
        const referer = document.referrer;
        const currentDomain = window.location.origin;
        // 检查referer是否为同域名下
        if (referer.startsWith(currentDomain)) {
            this.isSameDomainReferer = true;
        }
        }
    }
};
</script>

<template>
    <ul :class="{ 'no-animation': isSameDomainReferer }">
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="about">关于</router-link></li>
        <li style="display: list-item"><a href="https://rhopaper.top/">作者博客</a></li>
        <li style="float:right;display: list-item"><a href="https://bbs.rhopaper.top/d/12-todolist">Bug&建议</a></li>
    </ul>
</template>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #337;
    border-radius: 5px;
    text-align: center;
    position: relative;
    top: 0;
    opacity: 1;
    transform: translateY(0);
    transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}

  /* 定义动画 */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

  /* 触发动画 */
ul {
    animation: slideIn 0.5s ease-in-out forwards;
    animation-delay: 0.05s;
}

  /* 不播放动画 */
ul.no-animation {
    animation: none;
}

li {
    float: left;
    border-right: 1px solid #bbb;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: 0.4s;
}

li:last-child {
    border-right: none;
}

  /* 鼠标移动到选项上修改背景颜色 */
@media (hover: hover) {
    li a:hover {
        background-color: #111;
    }
}
</style>