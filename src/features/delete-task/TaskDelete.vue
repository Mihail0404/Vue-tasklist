<script setup lang="ts">
import * as taskEntity from "@/entities/task";

import { type UUIDTypes } from "uuid";

const sharedTasks = taskEntity.Model.Store.useSharedTasks().tasks;

defineProps<{
  title: string;
  description: string;
  date: Date;
  uuid: UUIDTypes;
}>();

function deleteTask(obj: taskEntity.Model.Types.TaskType) {
  let i = 0;
  for (const task of sharedTasks.value) {
    if (obj.title == task.title) {
      sharedTasks.value.splice(i, 1);
    }

    i++;
  }
}
</script>

<template>
  <button
    class="delete"
    @click="deleteTask({ title: title, description: description, date: date, uuid: uuid })"
  >
    Удалить
  </button>
</template>
