# @ahg0313/free-layout 布局组件

将网页改为响应式，支持 vue、 react

## 样式
### 断点的隐藏类
与 [Element-ui](https://element-plus.org/zh-CN/component/layout.html#%E5%9F%BA%E4%BA%8E%E6%96%AD%E7%82%B9%E7%9A%84%E9%9A%90%E8%97%8F%E7%B1%BB) 保持一致
```
@import "@ahg0313/free-layout/src/css/display.less";
```

* `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
* `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
* `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
* `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
* `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
* `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
* `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
* `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
* `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
* `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
* `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏

### 媒体查询
```less
@import "@ahg0313/free-layout/src/css/media.less";

// 变量
@xs-max-size: 768px;
@sm-max-size: 992px;
@md-max-size: 1200px;
@lg-max-size: 1920px;

.className {
  // 方法
  .xs({
    background: red;
  });
  
  .sm({
    background: #000;
  });
  
  .md({
    background: white;
  });
  
  .lg({
    background: gray;
  });
  
  .xl({
    background: green;
  });
}
```

### 珊格系统

参考 [ElementUI Layout 布局](https://element-plus.org/zh-CN/component/layout.html)
、[Bootstrap 珊格系统](https://v4.bootcss.com/docs/layout/grid/)

将网页划分成若干行，然后每行等分为若干列，基于这样的方式进行布局，形象的成为栅栏布局。

element可将每行划分为24个分栏，而bootstrap是划分为12个分栏，从使用角度，还是24个分栏更加精细。

|属性|像素|
|:-|-:|
|xs|< 768px|
|sm|>= 768px|
|md|>= 992px|
|lg|>= 1200px|
|xl|>= 1920px|

<br/>
<br/>
<br/>

## 组件
### 容器组件

参考 `HTML语义化标签` 与 [ElementUI Container 布局容器](https://element-plus.org/zh-CN/component/container.html)
组件，快速搭建页面基本结构

`an-container`: 外层容器。默认水平又左到右排列

`fl-header`: 顶栏容器

`fl-aside`: 侧边栏容器

`fl-main`: 主要区域容器

`fl-footer`: 底栏容器

`fl-nav`: 导航容器

> tip
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<fl-container>` 的直接子元素必须是后五个组件中的一个或多个。
> 后五个组件的父元素必须是一个 `<fl-container>`

#### 例子

[//]: # (![]&#40;container.png&#41;)

```html

<fl-container>
    <fl-aside width="200px">Aside</fl-aside>
    <fl-container>
        <fl-header heihgt="200px">Header</fl-header>
        <fl-nav>Nav</fl-nav>
        <fl-main>Main</fl-main>
        <fl-footer height="300px">Footer</fl-footer>
    </fl-container>
</fl-container>
```
vue
```vue
// vue2
import {FlContainer, FlAside, FlHeader, FlMain, FlFooter, FlNav} from '@ahg0313/free-layout/vue.js'


export default {
  //...,
  components: {FlContainer, FlAside, FlHeader, FlMain, FlFooter, FlNav}
}

// vue3
import {FlContainer, FlAside, FlHeader, FlMain, FlFooter, FlNav} from '@ahg0313/free-layout/vue.js'
```
react
```jsx
import {FlContainer, FlAside, FlHeader, FlMain, FlFooter, FlNav} from '@ahg0313/free-layout/react/js'
```

#### 属性

与`ElementUI Container` 组件保持保持一致

<br/>
<br/>
<br/>

### 布局
参考 [Element-ui Layout 布局](https://element-plus.org/zh-CN/component/layout.html), 与 `element-ui row col` 保持一致

通过 `fl-row` 和 `fl-col` 组件，并通过  `fl-col` 组件的 `span` 属性我们就可以自由地组合布局。

#### 例子
```html

<div>
    <fl-row>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :push="4">
            <div/>
        </fl-col>
        <fl-col :pull="4">
            <div/>
        </fl-col>
        <fl-col :offset="4">
            <div/>
        </fl-col>
        <fl-col :xs="4">
            <div/>
        </fl-col>
        <fl-col :xl="{span: 4, push: 4, pull: 4, offset: 4}">
            <div/>
        </fl-col>
    </fl-row>
</div>
```

vue
```vue
// vue2
import {FlRow, FlCol} from '@ahg0313/free-layout/vue.js'


export default {
  //...,
  components: {FlRow, FlCol}
}

// vue3
import {FlRow, FlCol} from '@ahg0313/free-layout/vue.js'
```
react
```jsx
import {FlRow, FlCol} from '@ahg0313/free-layout/react.js'
```


[//]: # (![]&#40;Layout.png&#41;)

#### 属性

不支持`tag`属性，其他与`ElementUI Layout` 组件保持保持一致

## 常量
### 窗口尺寸
```javascript
import {windowSize} from '@ahg0313/free-layout/src/constant/'

console.log(windowSize)
// xs: {
//   min: 0,
//     max: 767
// },
// sm: {
//   min: 768,
//     max: 991,
// },
// md: {
//   min: 992,
//     max: 1199
// },
// lg: {
//   min: 1200,
//     max: 1919
// },
// xl: {
//   min: 1920,
//     max: Infinity
// }
```

## hooks
vue >= 3.2.0 、react >= 16.8.0
### 设置窗口尺寸
> 待开发
### 监听窗口尺寸变化
