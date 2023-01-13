<template>
  <card-row
    name="Attention"
    :value="`${max}h`"
  />
  <card-line-indicator :value="attention" />
  <div class="card-attention-grid">
    <div
      v-for="(item, index) in attention"
      :key="index"
      class="card-attention-grid__item"
    >
      <span
        class="card-attention-grid__line"
        :style="`background: #${item.color}; width: ${item.percent}%`"
      />
      <span class="card-attention-grid__text"> {{ item.percent }}% </span>
    </div>
  </div>
</template>

<script setup>
import CardRow from "./CardPeopleRow";
import CardLineIndicator from "./CardPeopleLineIndicator";

const props = defineProps({
  content: {
    type: Array,
    default: () => []
  },
})

const max = computed(() => {
  if (props.content) {
    return props.content.reduce((acc, val) => {
      return acc + val.Amount
    }, 0)
  }
  return 0
})

const attention = computed(() => {
  if (props.content && props.content.length) {
    const diagram = props.content.map((val) => {
      const percent = (val.Amount / max.value) * 100;
      return {
        color: val.Color,
        amount: val.Amount,
        percent: percent.toFixed(0)
      }
    })
    return diagram;
  }
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
    padding: 0 5px;
    height: 100%;
    justify-content: center;
  }
}

.card-attention-grid {
  $block: &;
  margin-top: 20px;
  grid-gap: 7px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2,1fr);

  &__line {
    display: inline-flex;
    height: 100%;
    //flex-shrink: 0;
  }

  &__item {
    height: 30px;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    width: 100%;

    &:nth-child(2n) {
      justify-content: flex-start;

      #{$block}__line {
        border-radius: 0 8px 8px 0;
        order: -1;
      }
    }

    &:nth-child(2n + 1) {
      justify-content: flex-end;

      #{$block}__line {
        border-radius: 8px 0 0 8px;
        order: 1;
      }
    }
  }
}
</style>
