<template>
  <h2>{{ title }}</h2>
  <div class="remote-card">
    <h3>Claude</h3>
    <p>Our most powerful model, which excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction.</p>
    <ul>
      <li>Complex reasoning</li>
      <li>Creativity</li>
      <li>Thoughtful dialogue</li>
      <li>Coding</li>
      <li>Detailed content creation</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const title = ref('Remote Component -- Button')
</script>
<style>
.remote-card {
  width: 396px;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  color: #191919;
  overflow: hidden;
  padding: 16px;
  text-align: left;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
}
</style>
