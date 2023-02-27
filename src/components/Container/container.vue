<template>
  <div class="fl-container" :class="{vertical: isVertical}">
    <slot>Container</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FlContainer',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    isVertical() {
      return this.$props.direction === 'vertical'
    }
  }
})
</script>
<style scoped lang="less">
.fl-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;

  &.vertical {
    flex-direction: column;
  }
}
</style>
