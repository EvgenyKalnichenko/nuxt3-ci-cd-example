<template>
  <div class="card-attention">
    <div
      v-for="(item, index) in value"
      :key="index"
      :style="`background: #${item.color}; width: ${item.percent}%`"
      class="card-attention__item"
    />
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Array,
    default: () => [{
      color: '3ED94E',
      percent: 30
    }]
  },
})

</script>

<style lang="scss" scoped>
.card-attention {
  display: flex;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #c7c7c7;
  height: 16px;

  &__item {
    display: inline-flex;
    font-size: 12px;
    //padding: 0 5px;
    height: 100%;
    justify-content: center;
    border-radius: 0 7px 7px 0;
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: inherit;
      border-radius: 0 7px 7px 0;
      z-index: 2;
    }

    &:before {
      content: '';
      width: 8px;
      height: 100%;
      position: absolute;
      right: 100%;
      background: inherit;
      z-index: 1;
    }
  }
}
</style>
