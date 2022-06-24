<script setup lang="ts">
import { Ref, ref } from 'vue'

const counter: Ref<number> = ref(0)

const increment = (): void => {
  counter.value++
}
const decrement = (): void => {
  counter.value--
}
</script>

<template>
  <div>
    <div>Counter: {{counter}}</div>
    <div class="app-flex">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </div>
</template>
