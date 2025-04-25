<script>
import ChildComponent from "./WatchComposition.vue";

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
  <ChildComponent v-bind="post" />
  <ChildComponent :title="post.title" :text="post.text" />
</template>
