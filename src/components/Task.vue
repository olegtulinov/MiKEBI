<template lang="">
    <div class="row d-flex flex-column justify-content-end">
      <div class="col-auto d-flex justify-content-end me-3">Anton</div>
      <div class="col d-flex justify-content-end">
        <span me-1>1000</span>
        <img class="user_img" src="./../../src/assets/coin.png" alt="coin">
      </div>
    </div>
    <div class="row justify-content-between mt-5 p-x-2">
      <button class="button col-auto">
        <img src="./../assets/close_btn.png" alt="close">
      </button>
      <h1 class="title col-auto">{{ tasks.tasks[currentTask]?.task_conditions }}</h1>
      <button @click="clickButton" class="button col-auto">
        <img src="./../assets/bulb.png" alt="bulb">
      </button>
    </div>
    <div class="row">
      <h2 class="text col">{{ tasks.tasks[currentTask]?.task_text }}</h2>
    </div>
    <div class="row">
      <img class="img col-auto" :src="tasks.tasks[currentTask]?.task_image" alt="task_img">
    </div>
</template>

<script setup>
import { defineEmits, ref } from "vue"
import { useStore } from "./../stores/useStore";

const tasks = useStore()
const currentTask = tasks.currentTask
const emit = defineEmits(['click-btn'])
const clickButton = () => { emit('click-btn') }
</script>

<style scoped>
.user_img {
    width: 21px;
    height: 21px;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgb(227, 227, 227);
    border-radius: 5px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
}

.text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    font-size: 22px;
}

.img {
    display: flex;
    margin: 100px auto;
}
</style>