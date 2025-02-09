<script setup>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';
import PlusIcon from '../../components/icons/IconPlus.vue';
import Footer from '../../components/Footer.vue';
import Nav from '../Nav.vue';
import COP from '../ConsoleOutput.vue';

const str = ref("");
const list = ref([
    {
        isCompleted: false,
        value: "template-false"
    },
    {
        isCompleted: true,
        value: "template-true"
    },
]);

// 从Cookie中加载任务列表
function loadTasksFromCookie() {
    const storedTasks = Cookies.get('tasks');
    if (storedTasks) {
        list.value = JSON.parse(storedTasks);
    }
}

// 保存任务列表到Cookie
function saveTasksToCookie() {
    Cookies.set('tasks', JSON.stringify(list.value), { expires: 7 }); // 设置过期时间为7天
}

// 添加任务
function add() {
    if (str.value.trim() !== '') {
        list.value.push({
            isCompleted: false,
            value: str.value
        });
        str.value = "";
        saveTasksToCookie(); // 保存到Cookie
    }
}

// 删除任务
function del(index) {
    const confirmDelete = confirm("确定要删除此条 Todo 吗？\n " + list.value[index].value);
    if (confirmDelete) {
        list.value.splice(index, 1);
        saveTasksToCookie(); // 保存到Cookie
    }
}

// 按Enter键添加任务
function isEnter(event) {
    if (event.key === 'Enter') {
        add();
    }
}

// 在页面加载时从Cookie中加载任务列表
onMounted(() => {
    loadTasksFromCookie();
});
</script>

<template>
    <keep-alive><Nav/></keep-alive>
    <div class="todo-app">
        <div class="title">To Do List</div>

        <div class="todo-form">
            <input v-model="str" @keydown="isEnter" type="text" class="todo-input" placeholder="Add a todo" />
            <div @click="add" class="todo-button"><PlusIcon/></div>
        </div>

        <div v-for="(item, index) in list" :class="[item.isCompleted ? 'completed' : 'item']">
            <div>
                <input v-model="item.isCompleted" type="checkbox" @change="saveTasksToCookie" class="todo-checkbox" />
                <span class="name">{{ item.value }}</span>
            </div>

            <div @click="del(index)" class="del">删除</div>
        </div>
    </div>

    <Footer/>
    <COP/>
</template>

<style scoped>
.todo-app {
    box-sizing: border-box;
    margin-top: 40px;
    margin-left: 1%;
    padding-top: 50px;
    width: 98%;
    height: 700px;
    background: #fafafa;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
}

.todo-form {
    display: flex;
    margin: 25px 0;
}

.todo-button {
    width: 90px;
    height: 52px;
    border-radius: 0 15px 15px 0;
    text-align: center;
    background: linear-gradient(to right, rgb(113, 65, 168), rgba(44, 114, 251, 1));
    color: #fff;
    line-height: 52px;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
}

.todo-input {
    padding: 0px 300px 0px 30px;
    border-radius: 15px 0 0 15px;
    border: 1px solid #dfe1e5;
    outline: none;
    width: 60%;
    height: 50px;
}

.item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 50px;
    margin: 8px auto;
    padding: 16px;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 15px;
}

.del {
    color: red;
    cursor: pointer; /* 默认鼠标指针样式为手指 */
}

.del:hover {
    cursor: pointer; /* 悬停时鼠标指针样式为手指 */
}

.todo-checkbox {
    cursor: pointer; /* 默认鼠标指针样式为手指 */
}

.todo-checkbox:hover {
    cursor: pointer; /* 悬停时鼠标指针样式为手指 */
}

.completed {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 50px;
    margin: 8px 0;
    padding: 16px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
    text-decoration: line-through;
    opacity: 0.4;
}
</style>