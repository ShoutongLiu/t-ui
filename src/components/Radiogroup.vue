<template>
    <div class="t-radio_group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'RadioGroup',
    provide() {
        return {
            radioGroup: this
        }
    },
    props: {
        value: null
    }
}
</script>
