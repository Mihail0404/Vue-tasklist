<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import * as taskEntity from "@/entities/task";

import { v4 as uuidv4, UUIDTypes } from "uuid";

const sharedTasks = taskEntity.Model.Store.useSharedTasks().tasks;

const schema = toTypedSchema(
  yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    date: yup.date().required(),
  }),
);

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
});

const [title, titleAttrs] = defineField("title");
const [description, descriptionAttrs] = defineField("description");
const [date, dateAttrs] = defineField("date");

function addTask(obj: taskEntity.Model.Types.TaskType) {
  sharedTasks.value.push(obj);
}

const onSubmit = handleSubmit((values) => {
  addTask(values);
});
</script>
<template>
  <form class="form" @submit="onSubmit">
    <label for="title">Название задачи</label>
    <input v-model="title" type="text" v-bind="titleAttrs" />
    <div class="errors">{{ errors.title }}</div>
    <label for="description">Описание задачи</label>
    <input v-model="description" type="text" v-bind="descriptionAttrs" />
    <div class="errors">{{ errors.description }}</div>
    <label for="date">Дата создания</label>
    <input v-model="date" type="date" v-bind="dateAttrs" />
    <div class="errors">{{ errors.date }}</div>
    <button id="create-button" type="submit">Создать</button>
  </form>
</template>
