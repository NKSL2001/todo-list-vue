<template>
  <li>
    <span>{{ props.todo.activity }}</span>
    <span>{{ props.todo.price }}</span>
    <span>{{ props.todo.type }}</span>
    <span>{{ props.todo.bookingRequired }}</span>
    <span>{{ props.todo.accessibility }}</span>
    <button @click="$emit('delete')">Delete</button>
  </li>
</template>

<script setup lang="ts">
import type { Todo } from '@/interfaces/ITodo'

const props = defineProps<{
  todo: Todo
}>()
</script>

<style scoped>
li span {
  display: block;
}
</style>
