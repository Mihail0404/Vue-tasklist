<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "./features/create-task/TaskForm.vue";
import TaskList from "./entities/task/ui/TaskList.vue";

import * as taskEntity from "@/entities/task";

const tasks = ref<taskEntity.Model.Types.TaskType[]>([]);

function addTask(obj: taskEntity.Model.Types.TaskType) {
  tasks.value.push(obj);
}

function deleteTask(obj: taskEntity.Model.Types.TaskType) {
  let i = 0;
  for (const task of tasks.value) {
    if (obj.title == task.title) {
      tasks.value.splice(i, 1);
    }

    console.log(tasks);
    i++;
  }
}
</script>

<template>
  <div class="wrapper">
    <TaskForm
      @send-task="
        (obj: taskEntity.Model.Types.TaskType) => {
          addTask(obj);
        }
      "
    />
  </div>
  <TaskList
    :tasks="tasks"
    @delete-task="
      (obj: taskEntity.Model.Types.TaskType) => {
        console.log('F3');
        deleteTask(obj);
      }
    "
  />
</template>
