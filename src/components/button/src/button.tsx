import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from './button-type'
import '../style/button.scss'

export default defineComponent({
    name: 'MButton',
    props: buttonProps,
    setup(props: ButtonProps, { slots }) {
        const { size, type } = toRefs(props)
        return () => {
            const defaultSlot = slots.default ? slots.default() : '按钮'
            return <button class={`m-button-default is-${size.value}`}> {defaultSlot} </button>
        }
    }
})