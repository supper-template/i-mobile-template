/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        TAny: true,
        TDict: true,
        TFunc: true,
        NodeJS: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        // 新增，必须放在最后面
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 检测未使用变量的规则，error 代表检测出未使用变量时会抛出错误
        '@typescript-eslint/no-unused-vars': [2]
    }
}
