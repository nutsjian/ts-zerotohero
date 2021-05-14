测试 ESLint 验证 Prettier

```bash
# ESLint couldn't find the plugin "eslint-plugin-prettier".
# 意思是当使用第三方 Prettier 插件的时候，需要自身的 eslint-plugin-prettier 插件支持
# 所以需要先安装该插件，再在 .eslintrc.js 中配置 prettier 规则后，再次验证 lint
yarn lint
```

```javascript
{
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}
```

安装必要插件后再尝试 yarn lint
```bash
yarn add eslint-plugin-prettier -D -d

# .prettierrc.js 中的规则会纳入检查，如果不符合 .prettierrc.js 中的规范，会提示错误信息
# 然后通过 yarn lint:fix 修复即可
yarn lint
```
