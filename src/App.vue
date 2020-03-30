<template>
    <div id="app">
        <t-button
            type="danger"
            round
            plain
            @click="visible = true"
        >主要按钮</t-button>

        <div>
            <t-dialog
                title="提示"
                top="300px"
                slot="footer"
                :visible.sync="visible"
            >
                <template v-slot:footer>
                    <t-button type="primary">确定</t-button>
                    <t-button>取消</t-button>
                </template>
            </t-dialog>
        </div>
        <t-input type="password" placeholder="请输入" v-model="name" showPassword></t-input>
    </div>
</template>

<script>
import TButton from './components/Button.vue'
import TDialog from './components/Dialog.vue'
import TInput from './components/Input.vue'

export default {
    name: 'App',
    data() {
        return {
            visible: false,
            name: 'tom'
        }
    },
    components: {
        TButton,
        TDialog,
        TInput
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
