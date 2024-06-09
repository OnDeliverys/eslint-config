module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "standard",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: [
      "@typescript-eslint",
      "import",
      "prettier"
    ],
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: false,
          endOfLine: "auto"
        }
      ]
    },
    ignorePatterns: ["node_modules/", "dist/", "build/"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  }
  