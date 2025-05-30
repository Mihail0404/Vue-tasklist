<script setup lang="ts">
import TaskDelete from "@/features/delete-task/TaskDelete.vue";

import { type UUIDTypes } from "uuid";

defineProps<{
  title: string;
  description: string;
  date: Date;
  uuid: UUIDTypes;
}>();
</script>
<template>
  <p class="task-title">
    <strong>{{ title }} </strong>
  </p>
  <p>{{ description }}</p>
  <p>{{ date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() }}</p>
  <TaskDelete :title="title" :description="description" :date="date" :uuid="uuid" />
</template>
