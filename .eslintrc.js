module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        quotes: ['error', 'single'],
        // 'linebreak-style': 0,
        'no-console': 0,
        indent: [4, 'tab'],
    },
};
