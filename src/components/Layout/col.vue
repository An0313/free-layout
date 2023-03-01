<template>
  <div class="fl-col" :class="classes" :style="styles">
    <slot>aside</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import rowKey from './token'
import {classNamespace, isObject} from '../../utils/index'

export default defineComponent({
  name: 'FlRow',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object],
      default: () => ({})
    },
    sm: {
      type: [Number, Object],
      default: () => ({})
    },
    md: {
      type: [Number, Object],
      default: () => ({})
    },
    lg: {
      type: [Number, Object],
      default: () => ({})
    },
    xl: {
      type: [Number, Object],
      default: () => ({})
    }
  },
  setup() {
    const {gutter}: any = inject(rowKey)
    const setClassName = classNamespace('col')

    return {
      gutter,
      setClassName
    }
  },
  computed: {
    styles() {
      const style: any = {}
      const {gutter}: any = this

      if (gutter) {
        const p = `${gutter / 2}px`
        style.paddingLeft = p
        style.paddingRight = p
      }

      return style
    },
    classes() {
      const {span, offset, push, pull, $props: props, setClassName}: any = this
      const classList = []

      if (Number.isInteger(span)) {
        classList.push(setClassName(`span-${span}`))
      }

      if (Number.isInteger(offset) && offset > 0) {
        classList.push(setClassName(`offset-${offset}`))
      }

      if (Number.isInteger(push) && push > 0) {
        classList.push(setClassName(`push-${push}`))
      }

      if (Number.isInteger(pull) && pull > 0) {
        classList.push(setClassName(`pull-${pull}`))
      }

      const sizes = ["xs", "sm", "md", "lg", "xl"];

      sizes.forEach((size) => {
        if (Number.isInteger(props[size])) {
          classList.push(setClassName(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classList.push(prop !== "span" ? setClassName(`${size}-${prop}-${sizeProp}`) : setClassName(`${size}-${sizeProp}`));
          });
        }
      });

      return classList
    }
  }
})
</script>
<style scoped lang="less" src="./col.less"></style>
