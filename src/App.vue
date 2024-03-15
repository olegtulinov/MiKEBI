<template>
  <div class="container mt-5">
    <task @click-btn="click"></task>
  </div>
  <div class="footer">
    <div class="d-flex gap-3">
      <div v-for="(option, index) in tasks.tasks[currentTask]?.answer_options" :key="index">
        <label @click="setAnswer(option)" class="radio">
          <input class="real_input" type="radio" v-model="tasks.userAnswer" :value="option" name="radio">
          <span class="custom_btn">{{ option }}</span>
        </label>
      </div>
      <button @click="handleCheckAnswer" class="button">Check</button>
    </div>
  </div>
  <modal :isActive="isActive" @click-close="click"></modal>
</template>

<script>
import { onMounted, ref } from "vue"
import Modal from "./components/Modal.vue";
import Task from "./components/Task.vue";
import { useStore } from "./stores/useStore.js";

export default {
  components: {
    Task,
    Modal
  },
  setup(props) {
    const tasks = useStore()
    const currentTask = tasks.currentTask
    const isActive = ref(false)

    const click = function () {
      isActive.value = !isActive.value
    }
    const handleCheckAnswer = () => {
      if (!tasks.userAnswer) {
        alert('Выбирете вариант ответа')
        return
      }
      // @ts-ignore
      if (tasks.userAnswer === tasks.tasks[currentTask]?.correct_answer) {
        alert('Верно')
      } else {
        alert('Неверно')
      }
      tasks.selectAnswer('')
    }

    const setAnswer = (option) => {
      tasks.selectAnswer(option)
    }

    onMounted(async () => {
      tasks.getData()
    })

    return {
      tasks,
      currentTask,
      isActive,
      click,
      handleCheckAnswer,
      setAnswer,
    }
  }
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgb(227, 227, 227);
  border-radius: 5px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 22px;
}

.custom_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  height: 50px;
  width: 20vw;
  box-shadow: -3px 10px 26px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -3px 10px 26px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -3px 10px 26px 0px rgba(0, 0, 0, 0.3);
}

.real_input {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
}

.real_input:checked+.custom_btn {
  background: rgba(227, 176, 22, 0.796);
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(232, 232, 232, 0.315);
  padding: 20px;
}
</style>
