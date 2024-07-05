<script setup>
import { ref, reactive } from "vue";
import {useRoute, useRouter} from "vue-router"
// const title = ref('')
// const details= ref('')
const router = useRouter()
const project = reactive({
  title: "",
  details: "",
  complete: false
});

function handleSubmit() {
  // console.log(project.title)
  // console.log(project.details)
  fetch("http://localhost:3000/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  }).then(()=>{
    router.push('/')
  }).catch((err)=> console.log(err))
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="project.title" type="text" required />
      <label>Details:</label>
      <textarea class="textarea" v-model="project.details" required></textarea>
      <button>Add Project</button>
    </form>
  </div>
</template>

<style scoped>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
.textarea {
  height: 100px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
