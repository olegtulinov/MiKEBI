import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const api = 'http://localhost:5173/src/data.json';

export const useStore = defineStore('store', () => {
  const tasks = ref([]);
  const currentTask = ref(0);
  const userAnswer = ref('');

  const getData = async () => {
    const res = await axios.get(api);
    tasks.value = res.data;
  };

  const selectAnswer = (option) => {
    userAnswer.value = option;
  };

  return {
    tasks,
    currentTask,
    userAnswer,
    getData,
    selectAnswer,
  };
});
