import { createSharedComposable } from "@vueuse/core";
import * as Types from "./types";
import { ref } from "vue";

function useTasks() {
  const tasks = ref<Types.TaskType[]>([]);

  return { tasks };
}

const useSharedTasks = createSharedComposable(useTasks);

export { useSharedTasks };
