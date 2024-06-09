const path = require('path');

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        sourceType: "module",
        ecmaVersion: 2020
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    env: {
        node: true,
        es6: true
    },
    rules: {
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",
                "singleQuote": false,
                "semi": false
            }
        ]
    },
};
