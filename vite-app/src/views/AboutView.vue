<script lang="ts" setup>
import {ref} from "vue";

let counter = ref(0)

const increase = () => {
  counter.value++
};
</script>

<template>
  <div class="about">
    <h1>This is an about page with a counter</h1>
    <p>Counter is at: {{ counter }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
