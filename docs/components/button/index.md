# Button 按钮
:::info
按钮大小
<div class="button-container">
    <m-button size="normal">normal</m-button>
    <m-button size="small">small</m-button>
    <m-button size="large">large</m-button>
</div>
按钮类型
<div class="button-container">
    <m-button type="default">default</m-button>
    <m-button type="tertiary">tertiary</m-button>
    <m-button type="success">success</m-button>
    <m-button type="primary">primary</m-button>
    <m-button type="info">info</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="error">error</m-button>
</div>
是否禁用
<div class="button-container">
    <m-button type="info">abled</m-button>
    <m-button type="primary" disabled>disabled</m-button>
</div>
按钮圆角
<div class="button-container">
    <m-button type="info">not round</m-button>
    <m-button type="primary" round>round</m-button>
</div>
字体加粗
<div class="button-container">
    <m-button type="info">not strong</m-button>
    <m-button type="primary" strong>strong</m-button>
</div>
虚线按钮
<div class="button-container">
    <m-button type="default" dashed>default</m-button>
    <m-button type="tertiary" dashed>tertiary</m-button>
    <m-button type="success" dashed>success</m-button>
    <m-button type="primary" dashed>primary</m-button>
    <m-button type="info" dashed>info</m-button>
    <m-button type="warning" dashed>warning</m-button>
    <m-button type="error" dashed>error</m-button>
</div>
次要按钮
<div class="button-container">
    <m-button type="default" secondary>default</m-button>
    <m-button type="tertiary" secondary>tertiary</m-button>
    <m-button type="success" secondary>success</m-button>
    <m-button type="primary" secondary>primary</m-button>
    <m-button type="info" secondary>info</m-button>
    <m-button type="warning" secondary>warning</m-button>
    <m-button type="error" secondary>error</m-button>
</div>
文本按钮
<div class="button-container">
    <m-button type="default" text>default</m-button>
    <m-button type="tertiary" text>tertiary</m-button>
    <m-button type="success" text>success</m-button>
    <m-button type="primary" text>primary</m-button>
    <m-button type="info" text>info</m-button>
    <m-button type="warning" text>warning</m-button>
    <m-button type="error" text>error</m-button>
</div>
链接
<div class="button-container">
    <m-button size="large" type="default" text tag="a" href="http://www.baidu.com">百度</m-button>
</div>
:::

代码示例
```js
<div class="button-container">
    <m-button size="normal">normal</m-button>
    <m-button size="small">small</m-button>
    <m-button size="large">large</m-button>
</div>
<div class="button-container">
    <m-button type="default">default</m-button>
    <m-button type="tertiary">tertiary</m-button>
    <m-button type="success">success</m-button>
    <m-button type="primary">primary</m-button>
    <m-button type="info">info</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="error">error</m-button>
</div>
<div class="button-container">
    <m-button type="info">abled</m-button>
    <m-button type="primary" disabled>disabled</m-button>
</div>
<div class="button-container">
    <m-button type="info">not round</m-button>
    <m-button type="primary" round>round</m-button>
</div>
<div class="button-container">
    <m-button type="info">not strong</m-button>
    <m-button type="primary" strong>strong</m-button>
</div>
<div class="button-container">
    <m-button type="default" dashed>default</m-button>
    <m-button type="tertiary" dashed>tertiary</m-button>
    <m-button type="success" dashed>success</m-button>
    <m-button type="primary" dashed>primary</m-button>
    <m-button type="info" dashed>info</m-button>
    <m-button type="warning" dashed>warning</m-button>
    <m-button type="error" dashed>error</m-button>
</div>
<div class="button-container">
    <m-button type="default" secondary>default</m-button>
    <m-button type="tertiary" secondary>tertiary</m-button>
    <m-button type="success" secondary>success</m-button>
    <m-button type="primary" secondary>primary</m-button>
    <m-button type="info" secondary>info</m-button>
    <m-button type="warning" secondary>warning</m-button>
    <m-button type="error" secondary>error</m-button>
</div>
<div class="button-container">
    <m-button type="default" text>default</m-button>
    <m-button type="tertiary" text>tertiary</m-button>
    <m-button type="success" text>success</m-button>
    <m-button type="primary" text>primary</m-button>
    <m-button type="info" text>info</m-button>
    <m-button type="warning" text>warning</m-button>
    <m-button type="error" text>error</m-button>
</div>
<div class="button-container">
    <m-button size="large" type="default" text tag="a" href="http://www.baidu.com">百度</m-button>
</div>
```

<style> 
    .button-container {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
    }
</style>