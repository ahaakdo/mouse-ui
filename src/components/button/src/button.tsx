import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from './button-type'

export default defineComponent({
    name: 'MButton',
    props: buttonProps,
    setup(props: ButtonProps, { slots }) {
        const { size } = toRefs(props)
        return () => {
            const defaultSlot = slots.default ? slots.default() : '按钮'
            return <button class={`m-button-default is-${size.value}`}> {defaultSlot} </button>
        }
    }
})