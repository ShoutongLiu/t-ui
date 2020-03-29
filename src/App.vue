<template>
    <div id="app">
        <t-button
            type="danger"
            round
            plain
        >主要按钮</t-button>
        <t-button
            type="info"
            disabled
            size="small"
            circle
        >钮</t-button>
        <t-button
            type="primary"
            disabled
            size="mini"
            plain
        >按钮</t-button>
        <t-button
            type="warning"
            circle
            icon="t-icon-cuo"
            @click="handClick"
        ></t-button>
    </div>
</template>

<script>
import TButton from './components/Button.vue'

export default {
    name: 'App',
    components: {
        TButton
    },
    methods: {
        handClick(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
</style>
