<script>
export default {
  data() {
    return { question: "test" };
  },
  watch: {
    question(last, prev) {
      console.log(last);
    },
  },
  props: {
    mainText: String,
    mainTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <input type="text" v-model="question" />
  <h1>{{ mainText }}</h1>
  <button @click="$emit('someEvent', 2)">Example button</button>
</template>
