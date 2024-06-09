module.exports = {
    env: {
      node: true,
      es2021: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      project: "./tsconfig.json"
    },
    plugins: [
      "@typescript-eslint",
      "prettier"
    ],
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          semi: false
        }
      ]
    },
    ignorePatterns: ["node_modules/", "dist/", "build/"]
  }
  