<template>
  <div class="fl-row" :style="styles">
    <slot>aside</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide} from 'vue'
import rowKey from './token'

const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];

const RowAlign = ["flex-start", "center", "flex-end", "stretch"];

export default defineComponent({
  name: 'FlRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      values: RowJustify,
      default: "start"
    },
    align: {
      type: String,
      values: RowAlign,
      default: "stretch"
    }
  },
  setup(props) {
    provide(rowKey, {gutter: props.gutter})
  },
  computed: {
    styles() {
      const {gutter, justify, align} = this.$props

      const style: any = {
        justifyContent: justify,
        alignItems: align,
      }
      if (gutter) {


        const m = `-${gutter / 2}px`
        style.marginLeft = m
        style.marginRight = m
      }

      console.log('style', style)

      return style
    }
  }
})
</script>
<style scoped lang="less">
.fl-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}
</style>
