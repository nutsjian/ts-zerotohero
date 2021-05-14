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
  plugins: [],
  rules: {
    // ------ 覆盖 @typescript-eslint/recommended 的代码检查规则     START
    "@typescript-eslint/no-empty-interface": 0,     // interface Xxx {} 允许空的 interface {}
    "@typescript-eslint/no-unused-vars": ["warn"],
    "prefer-const": 0,
    "comma-dangle": [
      "error",
      "never"
    ],
    indent: [ // indent：缩紧 2 行，否则 error 报错
      "error",
      2,
      { "SwitchCase": 1 } // switch case 特殊处理，不然一直会报错
    ],
    // ------ 覆盖 @typescript-eslint/recommended 的代码检查规则     END
  }
}
