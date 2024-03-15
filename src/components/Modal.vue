<template>
    <div v-if="isActive" class="modal">
        <div class="modal_content">
            <span @click="clickClose" class="modal_close">
                <img src="./../assets/close_btn.png" alt="close">
            </span>
            <div class="d-flex align-items-center justify-content-center">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';


const props = defineProps({
    isActive: {
        type: Boolean
    },
});
const emit = defineEmits(['click-close'])
const clickClose = () => { emit('click-close') }



</script>
<style>
.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4)
}



.modal_content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
}

.modal_close {
    display: flex;
    justify-content: end;
}

.modal_close:hover {
    cursor: pointer;
    opacity: 0.7;
}
</style>