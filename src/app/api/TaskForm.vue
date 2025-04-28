<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const schema = toTypedSchema(
  yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    date: yup.date().required(),
  }),
)

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [title, titleAttrs] = defineField('title', { validateOnModelUpdate: true })
const [description, descriptionAttrs] = defineField('description', { validateOnModelUpdate: true })
const [date, dateAttrs] = defineField('date', { validateOnModelUpdate: true })

const onSubmit = handleSubmit((values) => {
  // tasks.value.push(values)
})
</script>
<template>
  <!-- <form class="form" @submit="onSubmit"> -->
  <form class="form" @submit="$emit('sendTask', { title, description, date })">
    <label for="title">Название задачи</label>
    <input type="text" v-model="title" v-bind="titleAttrs" />
    <div class="errors">{{ errors.title }}</div>
    <label for="description">Описание задачи</label>
    <input type="text" v-model="description" v-bind="descriptionAttrs" />
    <div class="errors">{{ errors.description }}</div>
    <label for="date">Дата создания</label>
    <input type="date" v-model="date" v-bind="dateAttrs" />
    <div class="errors">{{ errors.date }}</div>
    <button type="submit" id="create-button">Создать</button>
  </form>
</template>
