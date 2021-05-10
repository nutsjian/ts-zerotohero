module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    // 指定代码的运行环境
    // env环境变量配置，形如console属性只有在browser环境下才会存在，如果没有设置支持browser,那么可能报console is undefined的错误。
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    "prettier"
  ],
  rules: {
    // 将 prettier 作为 ESLint 规范来使用，当代码不符合 prettier 代码规范的时候抛出 ESLint 错误提示
    "prettier/prettier": "error",

    // ------ 覆盖 @typescript-eslint/recommended 的代码检查规则     START
    
    "@typescript-eslint/no-empty-interface": 0,     // interface Xxx {} 允许空的 interface {}

    // ------ 覆盖 @typescript-eslint/recommended 的代码检查规则     END

    indent: [ // indent：缩紧 2 行，否则 error 报错
      "error",
      2,
      { "SwitchCase": 1 } // switch case 特殊处理，不然一直会报错
    ],
  }
}