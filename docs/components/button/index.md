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
```

<style> 
    .button-container {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
    }
</style>