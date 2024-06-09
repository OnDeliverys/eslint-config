# Ondeliverys ESLint Configuration

## What's included?

- Standard base configuration;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": [
    "@ondeliverys/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### Electron

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": "@ondeliverys/eslint-config/electron"
}
```

### Nest.js

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": "@ondeliverys/eslint-config/nest"
}
```


### Next.js

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": "@ondeliverys/eslint-config/next"
}
```

### Node.js

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": "@ondeliverys/eslint-config/node"
}
```

### React Native

### React Native

Install dependencies:

```bash
npm i -D eslint @ondeliverys/eslint-config
```

Inside `.eslintrc.json`:

```json
{
  "extends": "@ondeliverys/eslint-config/reactnative"
}
```

## Contribution

If you find issues or have suggestions for improvements, feel free to open an [issue](https://github.com/seu-usuario/eslint-config-ondeliverys/issues) in this repository.

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
