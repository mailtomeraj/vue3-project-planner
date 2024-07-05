<script setup>
import { onMounted } from "vue";
import { computed } from "vue";
import { ref, reactive } from "vue";
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";

const projects = ref([]);
const current = ref("all");

onMounted(async () => {
  const response = await fetch("http://localhost:3000/projects");
  projects.value = await response.json();
});
const handleDelete = (id) => {
  projects.value = projects.value.filter((project) => project.id !== id);
};

function handleComplete(id) {
  const p = projects.value.find((project) => {
    return project.id === id;
  });
  p.complete = !p.complete;
}
const filteredProjects = computed(() => {
  if (current === "completed") {
    return projects.value.filter((project) => project.completed);
  }
  if (current === "ongoing") {
    return projects.value.filter((project) => !project.completed);
  }
  return projects.value;
});
</script>

<template>
  <div>
    <FilterNav @filterChange="current = $event" :current="current" />

    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
