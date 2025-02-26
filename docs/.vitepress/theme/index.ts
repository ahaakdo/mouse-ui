import DefaultTheme from "vitepress/theme";
import { Button } from '../../../src/components/button'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('m-button', Button)
    }
}