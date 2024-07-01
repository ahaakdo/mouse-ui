<template>
    <button :class="[
        'm-button-default',
        {
            'is-large': props.size === 'large',
            'is-normal': props.size === 'normal',
            'is-small': props.size === 'small'
        }
    ]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { defineOptions, defineProps, PropType } from 'vue'

defineOptions({
    name: 'MButton'
})

type sizeType = 'normal' | 'small' | 'large';

const props = defineProps({
    size: {
        type: String as PropType<sizeType>,
        default: 'normal'
    }
});


</script>