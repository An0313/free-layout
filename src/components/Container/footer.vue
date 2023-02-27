<template>
  <div class="fl-footer" :style="{height}">
    <slot>FlMain</slot>
  </div>
</template>

<script>
export default {
  name: 'FlFooter',
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  },
}
</script>
