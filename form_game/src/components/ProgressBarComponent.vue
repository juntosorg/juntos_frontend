<template>
  <div class="progress-container">
    <div class="progress">
      <div class="progress-bar" :style="{ width: progressPercent + '%' }">
        {{ Math.round(progressPercent) }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      answeredItems: 0,
      progressPercent: 0
    }
  },
  watch: {
    answeredItems: function () {
      this.updateProgress()
    }
  },
  mounted() {
    // teste
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
      }
      this.progressPercent = progress
    }, 1000)
  },
  methods: {
    updateProgress() {
      this.progressPercent = (this.answeredItems / this.totalItems) * 100
    }
  }
}
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
  background-color: #007bff;
  color: #ffffff;
}
</style>
