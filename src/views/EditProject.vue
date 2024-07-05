<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input v-model="project.title" type="text" required />
        <label>Details:</label>
        <textarea class="textarea" v-model="project.details" required></textarea>
        <button>Edit Project</button>
      </form>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import {useRoute, useRouter} from "vue-router"
const router = useRouter()
const project = reactive({
  title: "",
  details: "",
});
const route = useRoute()
onMounted(()=>{
    fetch(`http://localhost:3000/projects/${route.params.id}`)
    .then(res=>res.json())
    .then(data => {
       project.title=data.title
       project.details=data.details
    })
})
function handleSubmit(){
    fetch(`http://localhost:3000/projects/${route.params.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({title:project.title,details:project.details})
  }).then(()=>{
    router.push('/')
  }).catch((err)=> console.log(err))
}
</script>

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