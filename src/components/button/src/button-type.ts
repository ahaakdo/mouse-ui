import { PropType, ExtractPropTypes } from 'vue'

//定义按钮类型枚举
export type MButtonSize = 'normal' | 'large' | 'small'
export type MButtonType = 'primary' | 'error' | 'info' | 'warning' | 'default' | 'tertiary' | 'success'

//定义按钮组件的属性对象
export const buttonProps = {
    //按钮类型属性，类型为MButtonType枚举类型，默认secondary
    size: {
        type: String as PropType<MButtonSize>,
        default: 'normal'
    },
    type: {
        type: String as PropType<MButtonType>,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    strong: {
        type: Boolean,
        default: false
    }
} as const

//提取buttonProps对象中的属性值，用于组件声明属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>