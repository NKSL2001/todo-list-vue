<template>
  <form>
    <input type="text" placeholder="Activity" name="activity" />
    <input type="number" placeholder="Price" name="price" />
    <select placeholder="Type" name="type">
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
    <input type="checkbox" name="bookingRequired" />
    <div>
      <input type="range" name="accessibility" min="0" max="1" step="0.01" />
    </div>
    <button type="submit">Add</button>
  </form>
</template>
