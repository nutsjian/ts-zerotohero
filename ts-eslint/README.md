### 参考文章
1. https://juejin.cn/post/6859291468138774535
2. https://www.cnblogs.com/ssaylo/p/12806757.html

```bash
yarn init

yarn add typescript -D -d

# 安装 @types/node 让 node 的核心包具备类型提示
# 比如：console.log("hello world");
# 如果不安装 @types/node 会提示错误信息
yarn add @types/node -D -d

# 开发阶段为了能直接执行且监听 ts 文件的变化，安装 ts-node-dev
yarn add ts-node-dev -D -d

# ESLint 支持
### 1. 安装必要依赖
yarn add eslint -D -d
# 如何需要 typescript 解析支持，则需要添加如下依赖
# 并且在 .eslintrc.js 中添加如下内容：parser: "@typescript-eslint/parser"
yarn add @typescript-eslint/parser -D -d

### 2. 扩展 ESLint 插件
# 添加一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
# .eslintrc.js => extends: [] => "plugin:@typescript-eslint/recommended"
yarn add @typescript-eslint/eslint-plugin -D -d
```



### ESLint
#### 配置文件优先级
```bash
.eslintrc.js
.eslintrc.yaml
.eslintrc.yml
.eslintrc.json
.eslintrc
package.json
```

#### .eslintrc.js 配置文件

##### plugins
plugin插件主要是为eslint新增一些检查规则，举个例子：eslint-plugin-react就会对react项目做了一些定制的eslint规则。

plugins只是加载了插件，可以理解赋予了eslint解析jsx-boolean-value规则的检查能力，真正开启这个规则的检查能力还是要通过rules配置。（一个插件库里面往往有几十个新规则，并不是每一个规则都需要开启的，这时就要根据自己的需求来配置相关检查规则）

```js
//	.eslintrc.js
module.exports = {
  plugins: [
    'eslint-plugin-react'
  ],
  rules: {
    'eslint-plugin-react/jsx-boolean-value': 2
  }
}
```

plugins与rules结合是eslint基础能力

##### extends
extends可以看做是去集成一个个配置方案的最佳实践。

虽然说需要根据不同的需求、风格、规范去配置不同的eslint规则，但往往相似的项目之间需要配置的规则都是大同小异的。如果每一个项目都是重新一步步开始选择配置规则就比较显得不太人性了；这个时候就是extends体现作用的时候。

个人比较喜欢把extends理解为去集成eslint风格或者eslint插件的最佳实践，它配置的内容实际就是一份份别人配置好的.eslintrc.js。

还是以上述的eslint-plugin-react为例，它实现了几十种配置规则，为了方便其他人使用，它默认实现了两种最佳实践all以及recommened（在configs中可以看到具体的名称）

原先还需要自己一条条选择，这样就可以直接把官方配置好的最佳实践直接拿来用。如果碰到和自己风格或者规范有冲突的规则，那直接在rules中重新定义就可以了，毕竟冲突的规则往往都没有多少

```js
module.export = {
	extends: [
  	'eslint-plugin-react/recommended'
  ]
}
```

extends除了使用plugin中 config name 的加载方式，往往也会使用eslint-config-xxxx这样命名的包。主要是因为有些最佳实践往往不需要自己去重新实现规则检查的方法，只需要去导出一份eslint配置即可。

##### airbnb google standard, alloy, eslint-config-xxx


#### 参考文档
https://cloud.tencent.com/developer/section/1135595

#### comma-dangle
```javascript
// 1. 不允许有尾随逗号
"comma-dangle": [
  "error",
  "never"
],

// 2.
```
