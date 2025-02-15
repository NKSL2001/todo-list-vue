<template>
  <form @submit.prevent="handleSubmit">
    <label for="activity">Activity</label>
    <input type="text" placeholder="Activity" name="activity" v-model="formData.activity" />

    <label for="price">Price</label>
    <input type="number" placeholder="Price" name="price" v-model="formData.price" />

    <label for="type">Type</label>
    <select placeholder="Type" name="type" v-model="formData.type">
      <option value="education">Education</option>
      <option value="recreational">Recreational</option>
      <option value="social">Social</option>
      <option value="diy">DIY</option>
      <option value="charity">Charity</option>
      <option value="cooking">Cooking</option>
      <option value="relaxation">Relaxation</option>
      <option value="music">Music</option>
      <option value="busywork">Busywork</option>
    </select>

    <label for="bookingRequired">Booking Required</label>
    <input type="checkbox" name="bookingRequired" v-model="formData.bookingRequired" />

    <label for="accessibility">Accessibility</label>
    <div>
      <input
        type="range"
        name="accessibility"
        min="0"
        max="1"
        step="0.01"
        v-model="formData.accessibility"
        style="width: calc(100% - 5ch)"
      />
      {{ formData.accessibility }}
    </div>
    <button type="submit" style="grid-column: 1 / 3">Add</button>
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
  // clone object to prevent hand in same reactive object
  emit('add', { ...formData })
  // reset form
  formData.activity = ''
  formData.price = 0
  formData.type = ''
  formData.bookingRequired = false
  formData.accessibility = 0
}
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  height: fit-content;
}
</style>
