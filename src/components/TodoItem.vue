<template>
  <li>
    <button @click="$emit('delete')">Delete</button>
    <span>Activity: {{ props.todo.activity }}</span>
    <span>Price: {{ props.todo.price }}</span>
    <span>Type: {{ props.todo.type }}</span>
    <span>Booking is {{ !props.todo.bookingRequired ? 'not' : '' }} required</span>
    <span>Accessibility: {{ props.todo.accessibility }}</span>
  </li>
</template>

<script setup lang="ts">
import type { Todo } from '@/interfaces/ITodo'

const props = defineProps<{
  todo: Todo
}>()
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  list-style-type: none;
  padding: 5px;
  margin-block: 5px;

  span {
    display: block;
  }
  button {
    float: right;
    ::after {
      float: none;
    }
  }
}
</style>
