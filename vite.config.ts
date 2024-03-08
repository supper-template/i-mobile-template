import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import postCssPxToRem from 'postcss-pxtorem'
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()]
        })
    ],
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 75, // 1rem，根据 设计稿宽度/10 进行设置
                    propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
                })
            ]
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 打包配置
    build: {
        outDir: 'dist',
        assetsDir: 'assets', //指定静态资源存放路径
        sourcemap: false, //是否构建source map 文件
        minify: 'terser', // 混淆器，terser构建后文件体积更小
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true
            }
        },
        rollupOptions: {
            output: {
                compact: true,
                entryFileNames: 'static/js/[name]-[hash].js',
                chunkFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name].[ext]'
            }
        }
    },
    server: {
        //自定义代理规则
        proxy: {
            // 选项写法
            '^/weatherApi/.*': {
                // 1 目标路径 这里相当于公共的地址
                target: 'https://v1.yiketianqi.com',
                //2 允许跨域
                changeOrigin: true,
                // 3 重写路径
                rewrite: (path: string) => path.replace(/^\/weatherApi/, '')
            }
        }
    }
})
