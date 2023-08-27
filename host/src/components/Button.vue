<template>
  <h2>{{ title }}</h2>
  <button class="btn">Button</button>
</template>
<script setup>
import { ref } from 'vue'
const title = ref('Remote Component -- Button')
</script>
<style>
.btn {
  cursor: pointer;
  align-items: center;
  background-color: #191919;
  border: 0;
  border-radius: 16px;
  color: #fafaf7;
  display: inline-flex;
  font-family: sans-serif;
  font-size: 16px;
  justify-content: center;
  padding: 18px 32px 19px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.77,0,.175,1);
}
</style>