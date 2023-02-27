<template>
  <div class="fl-aside" :style="{width}">
    <slot>aside</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'FlAside',
  props: {
    width: {
      type: String,
      default: 'auto'
    }
  }
})
</script>
<style scoped lang="less">
.fl-aside {
  box-sizing: border-box;
}
</style>
