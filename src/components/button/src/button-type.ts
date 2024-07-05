import { PropType, ExtractPropTypes } from 'vue'

//定义按钮类型枚举
export type MButtonSize = 'normal' | 'large' | 'small'
export type MButtonType = 'primary' | 'error' | 'info' | 'warning' | 'default' | 'tertiary' | 'success'

//定义按钮组件的属性对象
export const buttonProps = {
    //按钮尺寸属性，类型为MButtonType枚举类型
    size: {
        type: String as PropType<MButtonSize>,
        default: 'normal'
    },
    //按钮类型属性
    type: {
        type: String as PropType<MButtonType>,
        default: 'default'
    },
    //按钮可选属性
    disabled: {
        type: Boolean,
        default: false
    },
    //按钮圆角属性
    round: {
        type: Boolean,
        default: false
    },
    //字体加粗属性
    strong: {
        type: Boolean,
        default: false
    },
    //虚线按钮属性
    dashed: {
        type: Boolean,
        default: false
    },
    //次要按钮属性
    secondary: {
        type: Boolean,
        default: false
    }
} as const

//提取buttonProps对象中的属性值，用于组件声明属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>