<template>
  <div class="fl-aside" :style="{width}">
    <slot>aside</slot>
  </div>
</template>

<script>
export default {
  name: 'FlAside',
  props: {
    width: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

