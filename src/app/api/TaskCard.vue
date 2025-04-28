<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: Date
}>()
</script>
<template>
  <p class="task-title">
    <strong>{{ title }} </strong>
  </p>
  <p>{{ description }}</p>
  <p>{{ date }}</p>
  <button class="delete">Удалить</button>
</template>
