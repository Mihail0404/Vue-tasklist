<script setup lang="ts">
import TaskForm from "./features/create-task/TaskForm.vue";
import TaskList from "./entities/task/ui/TaskList.vue";
</script>

<template>
  <div class="wrapper">
    <TaskForm />
  </div>
  <TaskList />
</template>
