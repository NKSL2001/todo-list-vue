<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Activity" name="activity" v-model="formData.activity" />
    <input type="number" placeholder="Price" name="price" v-model="formData.price" />
    <select placeholder="Type" name="type" v-model="formData.type">
      <option value="education">Education</option>
      <option value="recreational">recreational</option>
      <option value="social">social</option>
      <option value="diy">diy</option>
      <option value="charity">charity</option>
      <option value="cooking">cooking</option>
      <option value="relaxation">relaxation</option>
      <option value="music">music</option>
      <option value="busywork">busywork</option>
    </select>
    <input type="checkbox" name="bookingRequired" v-model="formData.bookingRequired" />
    <div>
      <input
        type="range"
        name="accessibility"
        min="0"
        max="1"
        step="0.01"
        v-model="formData.accessibility"
      />
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, type Reactive } from 'vue'
import type { Todo } from '@/interfaces/ITodo'

const emit = defineEmits(['add'])

const formData: Reactive<Todo> = reactive({
  activity: '',
  price: 0,
  type: '',
  bookingRequired: false,
  accessibility: 0,
})

function handleSubmit() {
  emit('add', formData)
}
</script>
