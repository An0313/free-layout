<template>
  <div class="fl-header" :style="{height}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FlHeader',
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
