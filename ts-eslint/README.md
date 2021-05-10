```bash
yarn init

# 安装 @types/node 让 node 的核心包具备类型提示
# 比如：console.log("hello world");
# 如果不安装 @types/node 会提示错误信息
yarn add @types/node -D -d

# 开发阶段为了能直接执行且监听 ts 文件的变化，安装 ts-node-dev
yarn add ts-node-dev -D -d


yarn add eslint -D -d

```