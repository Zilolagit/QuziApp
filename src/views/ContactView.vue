<template>
    <div class="container">
        <h2>Do you have a question ?</h2>

        <form class="contact" @submit.prevent="submitQuestion">
            <span class="p-input-icon-left">
                <i class="pi pi-user" />
                <InputText v-model="name" placeholder="Your Name" />
            </span>
            <span class="p-input-icon-left">
                <i class="pi pi-envelope" />
                <InputText v-model="email" placeholder="Your email" />
            </span>
            <MultiSelect v-model="selectedQuestionTypes" display="chip" :options="queryTypes" optionLabel="name" placeholder="Select Query Type"
            :maxSelectedLabels="4" class="w-full md:w-20rem" />
            <Textarea v-model="textArea" autoResize rows="5" cols="30" />
            <Button type="submit" class="mt-5" label="Submit" />
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios"
const selectedQuestionTypes = ref();
const queryTypes = ref([
    { name: 'Creating Question' },
    { name: 'Settings'},
    { name: 'Personal Profile' },
    { name: 'Messages' },
]);

const name = ref("")
const email = ref("")
const textArea = ref("");


async function submitQuestion(){
    const selected =  selectedQuestionTypes.value.map(ques => ques.name).join(",")
    await axios.get(`https://api.telegram.org/bot5621466919:AAHwLxo7exe-d_g13E1gR4jPkPNfQlGVpI4/sendMessage?chat_id=237282713&text=Name: ${name.value}%0AQuery Type: ${selected}%0AQuestion: ${textArea.value}%0A`)
    name.value = ""
    email.value = ""
    textArea.value = ""
    selectedQuestionTypes.value = []
}

</script>

<style>

.container {
    max-width: 1150px;
    margin: 0 auto;
}

.md\:w-20rem {
    width: 100% !important;
    margin-bottom: 30px;
}
 
.p-input-icon-left, .p-input-icon-right {
    width: 100%;
    margin-bottom: 30px;
}

</style>

<style lang="scss" scoped>

h2 {
    padding-bottom: 20px;
}
.p-component, .p-component *{
    width: 100%;
}

</style>