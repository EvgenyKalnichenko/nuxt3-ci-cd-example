<template>
  <div
    class="card-label"
    :style="`background: #${color}`"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: () => 'FFFFFF'
  }
})
</script>

<style scoped>
.card-label {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
}
</style>
