<script setup lang="ts">
import { ref, watch } from "vue";

const question = ref("this");

defineProps<{
  title?: string;
  text?: string;
}>();

watch(
  question,
  (last) => {
    console.log(last);
  },
  { immediate: true }
);
</script>
<template>
  <input type="text" v-model="question" />
  <h1>{{ title }}</h1>
  <p>{{ text }}</p>
</template>
