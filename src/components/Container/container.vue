<template>
  <div class="fl-container" :class="{vertical: isVertical}">
    <slot>Container</slot>
  </div>
</template>

<script>

export default {
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
}
</script>
<style scoped lang="less" src="./index.less"></style>
