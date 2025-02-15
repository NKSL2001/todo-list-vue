<script setup lang="ts">
import { computed } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoItem from './components/TodoItem.vue'
import type { Todo } from './interfaces/ITodo'
import { useTodoStore } from './stores/todo'

const store = useTodoStore()

function addNewTodo(todoItem: Todo) {
  store.addTodo(todoItem)
}

function deleteTodoItem(index: number) {
  store.deleteTodo(index)
}

const todoCount = computed(() => store.todoList.length)
</script>

<template>
  <TodoForm @add="addNewTodo" />

  <ul>
    <h2>Currently {{ todoCount }} todo in list</h2>
    <TodoItem
      v-for="(todoItem, index) in store.todoList"
      :key="index"
      :todo="todoItem"
      @delete="deleteTodoItem(index)"
    />
  </ul>
</template>

<style scoped>
ul {
  height: 90vh;
  overflow-y: auto;
}
</style>
