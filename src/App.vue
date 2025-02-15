<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import type { Todo } from './interfaces/ITodo'
import { useTodoStore } from './stores/todo'

const store = useTodoStore()

function addNewTodo(todoItem: Todo) {
  store.addTodo(todoItem)
}
</script>

<template>
  <TodoForm @add="addNewTodo" />

  {{ store.todoList }}
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
