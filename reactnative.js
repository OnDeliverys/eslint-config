module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      "react-native/react-native": true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react-native/all",
      "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: [
      "@typescript-eslint",
      "react",
      "react-hooks",
      "react-native",
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
    settings: {
      react: {
        version: "detect"
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      }
    }
  }
  