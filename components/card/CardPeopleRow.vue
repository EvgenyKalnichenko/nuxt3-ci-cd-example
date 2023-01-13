<template>
  <div class="card-row">
    <span class="card-row__name">{{ name }}:</span>
    <span class="card-row__right">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'Default Name'
  },
  value: {
    type: String,
    default: 'Default Value'
  },
})
</script>

<style scoped>
.card-row {
  display: flex;
  justify-content: space-between;
}
</style>
