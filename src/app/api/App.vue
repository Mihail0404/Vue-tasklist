<script setup lang="ts">
import { ref } from 'vue'
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

type TaskType = {
  title: string
  description: string
  date: Date
}

const tasks = ref<TaskType[]>([])

// tasks.value.push({ title: 'test', description: 'all in', date: Date.parse('01-01-2015') })

function addTask(obj: TaskType) {
  tasks.value.push(obj)
}
</script>

<template>
  <div class="wrapper">
    <TaskForm
      @sendTask="
        (obj) => {
          console.log(obj)
          addTask(obj)
        }
      "
    />
  </div>
  <!-- <h1>{{ tasks }}</h1> -->
  <TaskList :tasks="tasks"></TaskList>
</template>
