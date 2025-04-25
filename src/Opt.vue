<script>
export default {
  data() {
    return {
      height: 40,
    };
  },
  computed: {
    width() {
      return this.height * 2;
    },
  },
  methods: {
    getLengthName() {
      return this.firstName.length;
    },
  },
};
</script>

<template>
  <h1>{{ width }}</h1>
</template>

<style></style>
