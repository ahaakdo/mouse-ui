import MButton from './components/button.vue'
import type { App } from 'vue'

const components = [
    MButton
]

export function install(app: App) {
    components.forEach(component => {
        app.component(component.name as string, component)
    })
}

export default {
    install
}

export {
    MButton
}