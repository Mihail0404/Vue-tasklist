<script>
import ChildComponent from "./Watch.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      post: {
        text: "Текст",
        title: "Заголовок",
      },
    };
  },
};
</script>
<template>
  <ChildComponent main-text="test" @some-event="(n) => this.mainText" />
</template>
