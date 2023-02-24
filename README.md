# @ahg0313/free-layout 布局组件

将网页改为响应式



## 珊格系统
参考 [ElementUI Layout 布局](https://element-plus.org/zh-CN/component/layout.html)、[Bootstrap 珊格系统](https://v4.bootcss.com/docs/layout/grid/)

将网页划分成若干行，然后每行等分为若干列，基于这样的方式进行布局，形象的成为栅栏布局。

element可将每行划分为24个分栏，而bootstrap是划分为12个分栏，从使用角度，还是24个分栏更加精细。

|属性|像素|
|:-|-:|
|xs|< 768px|
|sm|>= 768px|
|md|>= 992px|
|lg|>= 1200px|
|xl|>= 1920px|

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

`an-header`: 顶栏容器

`an-aside`: 侧边栏容器

`an-main`: 主要区域容器

`an-footer`: 底栏容器

`an-nav`: 导航容器

> tip
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<an-container>` 的直接子元素必须是后五个组件中的一个或多个。
> 后五个组件的父元素必须是一个 `<an-container>`

### 例子

![](container.png)

```html

<an-container>
    <an-aside>Aside</an-aside>
    <an-container>
        <an-header>Header</an-header>
        <an-nav>Nav</an-nav>
        <an-main>Main</an-main>
        <an-footer>Footer</an-footer>
    </an-container>
</an-container>
```

### 属性
与`ElementUI Container` 组件保持保持一致

# 布局



通过 `an-row` 和 `an-col` 组件，并通过  `an-col` 组件的 `span` 属性我们就可以自由地组合布局。

```html

<div>
    <an-row>
        <an-col :span="24">
            <div/>
        </an-col>
    </an-row>
    <an-row>
        <an-col :span="12">
            <div/>
        </an-col>
        <an-col :span="12">
            <div/>
        </an-col>
    </an-row>
    <an-row>
        <an-col :span="8">
            <div/>
        </an-col>
        <an-col :span="8">
            <div/>
        </an-col>
        <an-col :span="8">
            <div/>
        </an-col>
    </an-row>
    <an-row>
        <an-col :span="6">
            <div/>
        </an-col>
        <an-col :span="6">
            <div/>
        </an-col>
        <an-col :span="6">
            <div/>
        </an-col>
        <an-col :span="6">
            <div/>
        </an-col>
    </an-row>
    <an-row>
        <an-col :span="4">
            <div/>
        </an-col>
        <an-col :span="4">
            <div/>
        </an-col>
        <an-col :span="4">
            <div/>
        </an-col>
        <an-col :span="4">
            <div/>
        </an-col>
        <an-col :span="4">
            <div/>
        </an-col>
        <an-col :span="4">
            <div/>
        </an-col>
    </an-row>
</div>
```

![](Layout.png)

### 属性
与`ElementUI Layout` 组件保持保持一致

