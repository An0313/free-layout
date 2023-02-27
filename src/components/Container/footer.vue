<template>
  <div class="fl-footer" :style="{height}">
    <slot>FlMain</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FlFooter',
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  },
})
</script>
<style scoped lang="less">

</style>
