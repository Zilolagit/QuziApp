<template>
  <div class="container generate__container">
    <h2 class="text-center" style="margin-bottom: 80px;">Welcome to our QUIZES Party</h2>

    <form @submit.prevent="submitForm">

      <div class="flex flex-column gap-3 mb-5">
        <label for="questions">Number of Questions:</label>
        <InputText id="questions" v-model="questionsNumber" aria-describedby="username-help" />
      </div>

      <div class="flex flex-column gap-3 mb-5">
        <label for="category">Select Category:</label>
        <Dropdown id="category" v-model="selectedCategory" :options="categories" showClear optionLabel="name" placeholder="Any category" class="w-full" />
      </div>
      <div class="flex flex-column gap-3 mb-5">
        <label for="difficulty">Select Difficulty:</label>
        <Dropdown id="difficulty" v-model="selectedDifficulty" :options="difficulties" showClear placeholder="Any Difficulty" class="w-full" />
      </div>
      <div class="flex flex-column gap-3 mb-5">
        <label for="type">Select Type:</label>
        <Dropdown id="type" v-model="selectedType" :options="types" showClear placeholder="Any Type" class="w-full" />
      </div>

      <Button label="Next"  class="w-full" type="submit" outlined />

    </form>
  </div>
</template>

<script setup>

// Router
import router from '@/router';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const questionsNumber = ref(10);
const questions = ref([])
const selectedCategory = ref();
const selectedDifficulty = ref();
const selectedType = ref();
const categories = ref([]);
const difficulties = ref([
  "Easy",
  "Medium",
  "Hard"
]);
const types = ref([
  "Multiple Choice",
  "True / False"
])

const link = ref("")

async function submitForm() {
  if (selectedCategory.value != undefined) {
    link.value += `&category=${selectedCategory.value.id}`
  }
  if (selectedDifficulty.value != undefined){
    link.value += `&difficulty=${selectedDifficulty.value.toLowerCase()}`
  }
  if (selectedType.value != undefined) {
    if (selectedType.value ==  "Multiple Choice"){
      link.value += `&type=multiple`
    }else {
      link.value += `&type=boolean`
    }
  }
  const response = ref(await axios.get(`https://opentdb.com/api.php?amount=${questionsNumber.value}${link.value}`));
  questions.value = response.value.data.results
  link.value = ""
  if (questions.value.length > 0) {
    router.push("/test")
  }else {
    toast.error("This kind of test is not available in our database right now", {
      autoClose: 2000,
      theme: "colored"
    });
    selectedCategory.value = undefined
    selectedDifficulty.value =  undefined
    selectedType.value = undefined
    questionsNumber.value = 10
  }
};

onMounted( async () => {
  const response = ref(await axios.get("https://opentdb.com/api_category.php"))
  categories.value = response.value.data.trivia_categories
});

</script>

<style lang="scss">
  .generate__container{
    max-width: 1000px;
    margin: 0 auto;
  }
</style>