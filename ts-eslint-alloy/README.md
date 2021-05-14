package.json

```json
{
  "devDependencies": {
    "@types/node": "^15.0.2",
    "@typescript-eslint/parser": "^4.23.0",
    "eslint": "^7.26.0",
    "eslint-config-alloy": "^4.1.0",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.2.4"
  }
}
```

.eslintrc.js

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "alloy",
    "alloy/typescript"
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  plugins: [],
  rules: {
    // 自定义你的规则
  }
}
```

测试 ESLint

```bash
# ESLint couldn't find the plugin "@typescript-eslint/eslint-plugin".
# 意思是当使用第三方 ESLint Config 插件的时候，需要自身的 @typescript-eslint/eslint-plugin 插件支持
# 所以需要先安装该插件
yarn lint
```

安装必要插件后再尝试 yarn lint
```bash
yarn add @typescript-eslint/eslint-plugin -D -d

yarn lint
```
