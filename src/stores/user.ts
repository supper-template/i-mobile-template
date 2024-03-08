import { defineStore } from 'pinia'

interface UserState {
    token: string
}

export const useUsersStore = defineStore('users', {
    // 需要注意的是，state接收的是一个箭头函数返回的值，它不能直接接收一个对象。
    state: (): UserState => ({
        token: ''
    }),
    getters: {
        // 默认接收一个state参数，可以通过解构的方式获取state中的数据
        getToken: ({ token }) => {
            return token
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
        }
    },
    persist: true
})

// 在组件中使用：
// import { useUsersStore } from "@/store/user";
// import { storeToRefs } from "pinia";
// const store = useUsersStore();

// const { token } = storeToRefs(store);

// 批量修改
// store.$patch({
//      token: '123'
// })

// 保存
// store.setToken("456");

// 重置store
// store.$reset()
