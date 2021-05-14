当我们对 ESLint、Prettier、EditorConfig 的配置规范非常熟悉过后，我们就可以用编辑器IDE来完成这些规范的自动处理。


### commitizen 统一的 git commit 规范
```bash
# 1. 添加全局 commitizen 工具库
npm install commitizen -g -d

# 2. 在要添加的项目根目录下执行
# 运行成功后，在 package.json 中添加了 "config": { "commitizen": { "path": "....." } } 信息
commitizen init cz-conventional-changelog --save --save-exact

# 3. 把所有的 git commit 命令操作都替换成 git cz，会出现如下信息：
git cz
```

```bash
$ git cz

cz-cli@3.0.5, cz-conventional-changelog@2.1.0

Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.

? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)
```

```bash
# 4. 我们还需要在 git 提交的时候进行 commit 规范的检查，首先安装 validate-commit-msg 并在根目录中新建一个 .vcmrc 文件用于定义 commit 的验证规则
yarn add validate-commit-msg -D -d

# 5. 在项目根目录下新建 .vcmrc 文件，并填写如下内容：
```

```json
{
  "types": [ "feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert" ],
  "scope": {
    "required": false,
    "allowed": [ "*" ],
    "validate": false,
    "multiple": false
  },
  "warnOnFail": false,
  "maxSubjectLength": 100,
  "subjectPattern": ".+",
  "subjectPatternErrorMsg": "subject does not match subject pattern!",
  "helpMessage": "",
  "autoFix": true
}
```

```bash
# 6. 安装 husky，让我们可以很方便的定义 git hooks
yarn add husky -D -d
```

```json
// 在 package.json 中定义 git hooks，使用 validate-commit-msg 来检查 commit 格式
"husky": {
  "hooks": {
    "commit-msg": "validate-commit-msg"
  }
}
```

```bash
# 7. 现在我们还希望能在 commit 时自动执行代码格式化和语法检查，要使用一条命令执行多项操作可以安装 npm-run-all
# npm-run-all 提供两个命令 run-s 串行执行多条命令 run-p 并行执行多条命令，在 package.json 中定义一个 script，用于串行执行所有以 style: 开头的 script
# 如下：yarn style 会串行执行 style:prettier、style:lint 两条命令
yarn add npm-run-all -D -d
```

```json
"scripts": {
  "style": "run-s style:**",
  "style:prettier": "prettier --write \"src/**/*.ts\"",
  "style:lint": "tslint -p tsconfig.json -c tslint.json"
}
```

```bash
# 8. 修改 husky，添加提交前的检查命令
"husky": {
  "hooks": {
    "pre-commit": "yarn style",
    "commit-msg": "validate-commit-msg"
  }
}
```

```bash
# 9. 完成上述配置后，我们尝试一次提交，步骤如下：
### 9.1
git add.
### 9.2
git cz
### 9.3

```


### husky lint-stage 结合
```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "**/*.{js,ts,tsx}": [
    "yarn prettier",
    "git add"
  ],
  "**/*.{ts,spec.js,tsx}": [
    "eslint --fix",
    "git add"
  ]
}
```



### alloy 的最佳实践
VSCode 的一个最佳实践就是通过配置 .vscode/settings.json 来支持自动修复 Prettier 和 ESLint 错误：

```json
{
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 在 VSCode 中使用
在 VSCode 中，默认 ESLint 并不能识别 .vue、.ts 或 .tsx 文件，需要在「文件 => 首选项 => 设置」里做如下配置：
```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}
```

### 保存时自动修复 ESLint 错误
如果想要开启「保存时自动修复」的功能，你需要配置 .vscode/settings.json：
```json
{
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

### VSCode 中的 autoFixOnSave 没有效果
如果需要针对 .vue、.ts 和 .tsx 文件开启 ESLint 的 autoFix，则需要配置成：

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```

### 常用命令

```bash
# 安装依赖
npm i
# 构建 index.js react.js 等 eslintrc 配置
npm run build
# 执行测试
npm test
# 自动修复 ESLint 错误
npm run eslint:fix
# 自动修复格式错误
npm run prettier:fix
# 检查当前是否覆盖了所有的规则
npm run test:rulesCoverage
# 发布新版本
npm version <major|minor|patch>
git push --follow-tags
npm publish
```
