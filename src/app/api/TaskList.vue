<script setup lang="ts">
import taskCard from './TaskCard.vue'

defineProps<{
  tasks: {
    title: string
    description: string
    date: Date
  }[]
}>()
</script>
<template>
  <div class="task-cards">
    <div class="task" :key="task.title" v-for="task in tasks">
      <taskCard :title="task.title" :description="task.description" :date="task.date"></taskCard>
    </div>
  </div>
</template>
