import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from './button-type'
import '../style/button.scss'

export default defineComponent({
    name: 'MButton',
    props: buttonProps,
    setup(props: ButtonProps, { slots }) {
        const { size, type, disabled, round, strong, dashed, secondary, text, tag, href } = toRefs(props)
        return () => {
            const defaultSlot = slots.default ? slots.default() : '按钮'
            return <button
                class={`m-button-default is-${size.value} is-${type.value}`}
                disabled={disabled.value}
                round={round.value}
                strong={strong.value}
                dashed={dashed.value}
                secondary={secondary.value}
                text={text.value}
            >
                {
                    tag?.value === 'a' ?
                        <a href={href?.value} target="_blank">{defaultSlot}</a> : defaultSlot

                }
            </button>
        }
    }
})