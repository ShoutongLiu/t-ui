import Button from './Button'
import Checkbox from './Checkbox'
import CheckboxGroup from './Checkboxgroup'
import Dialog from './Dialog'
import Form from './Form'
import FormItem from './Formitem'
import Input from './Input'
import Radio from './Radio'
import RadioGroup from './Radiogroup'
import Switch from './Switch'

const components = [
    Button,
    Checkbox,
    CheckboxGroup,
    Dialog,
    Form,
    FormItem,
    Input,
    Radio,
    RadioGroup,
    Switch
]

const install = function (Vue) {
    // 注册组建
    components.forEach(v => {
        Vue.component(v.name, v)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}
