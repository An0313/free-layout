<template>
  <div class="fl-header" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlHeader',
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  },
}
</script>
