<script setup lang="ts">
import taskCard from "./TaskCard.vue";

import * as taskEntity from "@/entities/task";

const sharedTasks = taskEntity.Model.Store.useSharedTasks().tasks;
</script>
<template>
  <div class="task-cards">
    <div v-for="task in sharedTasks" :key="task.title" class="task">
      <taskCard
        :title="task.title"
        :description="task.description"
        :date="task.date"
        :uuid="task.uuid"
      />
    </div>
  </div>
</template>
