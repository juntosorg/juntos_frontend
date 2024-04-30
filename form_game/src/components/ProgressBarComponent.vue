<template>
  <div class="container mt-5">
    <div class="progress border shadow" style="background-color: white">
      <div class="progress-bar" :style="{ width: progressPercent + '%'}">
        {{ Math.round(progressPercent) }}%
        <!-- {{ answeredItems }} / {{ totalItems }} -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  answeredItems: {
    type: Number,
    required: true
  }
})

const progressPercent = computed(() => {
  return (props.answeredItems / props.totalItems) * 100
})
</script>

<style scoped>
.progress-container {
  width: 100%;
}

.progress {
  height: 20px;
  border-radius: 10px;
  background-color: #e9ecef;
}

.progress-bar {
  height: 100%;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #4caf50;
  color: #ffffff;
}
</style>
