<script setup lang="ts">
import * as taskEntity from "@/entities/task";

import TaskDelete from "@/features/delete-task/TaskDelete.vue";

defineProps<{
  title: string;
  description: string;
  date: Date;
}>();

const emit = defineEmits<{
  deleteTask: [task: taskEntity.Model.Types.TaskType];
}>();
</script>
<template>
  <p class="task-title">
    <strong>{{ title }} </strong>
  </p>
  <p>{{ description }}</p>
  <p>{{ date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() }}</p>
  <taskDelete>
    <button
      class="delete"
      @click="emit('deleteTask', { title: '2222', description: 'description', date: Date.now() })"
    >
      Удалить
    </button></taskDelete
  >
</template>
