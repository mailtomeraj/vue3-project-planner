<script setup>
import { onMounted, ref } from "vue";
const props = defineProps(["project"]);
const emit = defineEmits(["delete", "complete"]);
const showDetails = ref(false);

const deleteProject = async () => {
  //   fetch(`http://localhost:3000/projects/${props.project.id}`, { method: 'DELETE' })
  //     .then(() => emit('delete', props.project.id))
  //     .catch(err=console.log(err))
  await fetch(`http://localhost:3000/projects/${props.project.id}`, {
    method: "DELETE",
  });
  emit("delete", props.project.id);
};

function toggleComplete() {
 fetch(`http://localhost:3000/projects/${props.project.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      complete: !props.project.complete
    })
  }).then(()=>{
    emit("complete", props.project.id)
  }).catch((err) => console.log(err))
  
}
</script>

<template>
  <div class="project" :class="{complete : project.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span @click="toggleComplete" class="material-icons task"> done </span>
        <span @click="deleteProject" class="material-icons"> delete </span>
       <router-link :to="`/project/${project.id}`"> <span class="material-icons"> edit </span></router-link>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 20px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
.project.complete{
  border-left: 4px solid lightseagreen;
}
.project.complete .task
{
  color:lightseagreen;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  color: #aaa;
  cursor: pointer;
  margin-left: 10px;
}
.material-icons:hover {
  color: #222;
}
</style>
