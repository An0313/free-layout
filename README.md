# @ahg0313/free-layout 布局组件

将网页改为响应式

## 全局属性

|属性名|说明|类型|默认值|
|:-|:-:|:-:|-:|
|hidden|隐藏 `dispaly: none`|`object`|{xs: false, sm: false, md: false, lg: false, xl: false}|
|order|排列顺序。数值越小，排列越靠前。flex布局的order属性|`number`|0|

> 实现方式：
> vue 通过 [自定义全局指令](https://cn.vuejs.org/guide/reusability/custom-directives.html#introduction)
> react

## 容器组件

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

### 例子

![](container.png)

```html

<fl-container>
    <fl-aside>Aside</fl-aside>
    <fl-container>
        <fl-header>Header</fl-header>
        <fl-nav>Nav</fl-nav>
        <fl-main>Main</fl-main>
        <fl-footer>Footer</fl-footer>
    </fl-container>
</fl-container>
```

### 属性

与`ElementUI Container` 组件保持保持一致

# 布局

通过 `fl-row` 和 `fl-col` 组件，并通过  `fl-col` 组件的 `span` 属性我们就可以自由地组合布局。

```html

<div>
    <fl-row>
        <fl-col :span="24">
            <div/>
        </fl-col>
    </fl-row>
    <fl-row>
        <fl-col :span="12">
            <div/>
        </fl-col>
        <fl-col :span="12">
            <div/>
        </fl-col>
    </fl-row>
    <fl-row>
        <fl-col :span="8">
            <div/>
        </fl-col>
        <fl-col :span="8">
            <div/>
        </fl-col>
        <fl-col :span="8">
            <div/>
        </fl-col>
    </fl-row>
    <fl-row>
        <fl-col :span="6">
            <div/>
        </fl-col>
        <fl-col :span="6">
            <div/>
        </fl-col>
        <fl-col :span="6">
            <div/>
        </fl-col>
        <fl-col :span="6">
            <div/>
        </fl-col>
    </fl-row>
    <fl-row>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :span="4">
            <div/>
        </fl-col>
        <fl-col :span="4">
            <div/>
        </fl-col>
    </fl-row>
</div>
```

![](Layout.png)

### 属性

不支持`tag`属性，其他与`ElementUI Layout` 组件保持保持一致


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
