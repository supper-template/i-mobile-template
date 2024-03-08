import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 加密 pinia
import SecureLS from 'secure-ls'
// 引入 pinia 插件(持久化)
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import 'amfe-flexible'

import './styles/main.css'

// 创建 SecureLS 实例
export const ls = new SecureLS({
    encodingType: 'aes',
    isCompression: false
})

const pinia = createPinia() // 创建 pinia 实例

const app = createApp(App)

app.use(pinia).use(router).mount('#app')

pinia.use(piniaPersist)

// 在 Pinia 中注册插件
pinia.use(({ store }) => {
    // 加密状态并存储到 SecureLS 中
    const encryptAndStoreState = () => {
        ls.set(store.$id, store.$state)
    }

    store.$subscribe(encryptAndStoreState) // 在每次状态变更时调用加密函数
})

export default app
