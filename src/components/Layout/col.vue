<template>
  <div class="fl-col" :class="classes" :style="styles">
    <slot>aside</slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import rowKey from './token'
import {isNumber} from "@vueuse/core";
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

      if (Number.isInteger(push) && offset > 0) {
        classList.push(setClassName(`push-${push}`))
      }

      if (Number.isInteger(pull) && offset > 0) {
        classList.push(setClassName(`pull-${pull}`))

      }

      const sizes = ["xs", "sm", "md", "lg", "xl"];

      sizes.forEach((size) => {
        if (isNumber(props[size])) {
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
<style scoped lang="less">
@import "../../css/media";

@n-default: 24;
.fl-col {
  box-sizing: border-box;
}

.setSpan(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-span-@{i} {
    flex: 0 0 (@i / @n * 100%);
  }
  .setSpan(@n, (@i + 1));
}


.setOffset(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-offset-@{i} {
    margin-left: (@i / @n * 100%);
  }
  .setOffset(@n, (@i + 1));
}


.setPush(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-push-@{i} {
    position: relative;
    left: (@i / @n * 100%);
  }
  .setPush(@n, (@i + 1));
}


.setPull(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-pull-@{i} {
    position: relative;
    right: (@i / @n * 100%);
  }
  .setPull(@n, (@i + 1));
}


.setSize(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-xl-@{i} {
    position: relative;
    right: (@i / @n * 100%);
  }
  .setSize(@n, (@i + 1));
}

.setPull();
.setPush();
.setOffset();
.setSpan();


.setSize(@n: @n-default, @i: 1) when (@i =< @n) {
  .fl-col-xs-@{i} {
    .xs({
      flex: 0 0 (@i / @n * 100%);
    });

    .sm({
      flex: 0 0 (@i / @n * 100%);
    });

    .md({
      flex: 0 0 (@i / @n * 100%);
    });

    .lg({
      flex: 0 0 (@i / @n * 100%);
    });

    .xl({
      flex: 0 0 (@i / @n * 100%);
    });
  }
  .fl-col-xs-offset-@{i} {
    .xs({
      margin-left: (@i / @n * 100%);
    });

    .sm({
      margin-left: (@i / @n * 100%);
    });

    .md({
      margin-left: (@i / @n * 100%);
    });

    .lg({
      margin-left: (@i / @n * 100%);
    });

    .xl({
      margin-left: (@i / @n * 100%);
    });
  }
  .fl-col-xs-push-@{i} {
    .xs({
      position: relative;
      left: (@i / @n * 100%);
    });

    .sm({
      position: relative;
      left: (@i / @n * 100%);
    });

    .md({
      position: relative;
      left: (@i / @n * 100%);
    });

    .lg({
      position: relative;
      left: (@i / @n * 100%);
    });

    .xl({
      position: relative;
      left: (@i / @n * 100%);
    });
  }
  .fl-col-xs-offset-@{i} {
    .xs({
      margin-left: (@i / @n * 100%);
    });

    .sm({
      margin-left: (@i / @n * 100%);
    });

    .md({
      margin-left: (@i / @n * 100%);
    });

    .lg({
      margin-left: (@i / @n * 100%);
    });

    .xl({
      margin-left: (@i / @n * 100%);
    });
  }
  .fl-col-xs-pull-@{i} {
    .xs({
      position: relative;
      right: (@i / @n * 100%);
    });

    .sm({
      position: relative;
      right: (@i / @n * 100%);
    });

    .md({
      position: relative;
      right: (@i / @n * 100%);
    });

    .lg({
      position: relative;
      right: (@i / @n * 100%);
    });

    .xl({
      position: relative;
      right: (@i / @n * 100%);
    });
  }

}

.setSize();

</style>
