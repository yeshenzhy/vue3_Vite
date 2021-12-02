/*
 * @Author: zhy
 * @Date: 2021-11-22 18:31:11
 * @Description:
 * @LastEditTime: 2021-11-30 21:07:41
 */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
      CONFIG_MAP: false,
      CONFIG: false,
      THING: false,
      CMAP: false,
      uino: false,
      axios: false,
      defineEmits: true,
      defineProps: true,
      defineExpose: true,
      reactive: true
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'error',
        // 强制 error
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        // 推荐 warn
        'max-len': [
            'warn',
            {
                code: 300,
            },
        ],
        'vue/html-quotes': 'warn',
        'linebreak-style': 'off',
        'global-require': 0,
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: true,
            },
        ],
        'consistent-return': 1,
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        'no-param-reassign': 0,
        'import/extensions': ['error', 'always', { js: '0', ts: 'never', tsx: 'never', vue: '0' }]
    },
};
