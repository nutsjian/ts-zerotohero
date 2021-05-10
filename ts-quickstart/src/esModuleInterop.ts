/**
 * 参考文章：https://zhuanlan.zhihu.com/p/148081795
 * 
 * 很多 react 使用者在从 JS 迁移到 TS 时，可能会遇到这样一个问题：
 * 1. JS 引入 react 是这样的：
 * --- import React from "react"
 * 
 * 2. TS 引入 react 是这样的：
 * --- import * as React from "react"
 * 
 * 如果直接在 TS 里改成 JS 一样的写法，在安装了 @types/react 的情况下，
 * 编辑器会抛出一个错误：此模块是使用 "export =" 声明的，在使用 "esModuleInterop" 标志时只能与默认导入一起使用。
 * 根据提示，在 tsconfig.json 中设置 compilerOptions.esModuleInterop 为 true，报错就消失了。
 * 
 * 
 * 要搞清楚这个问题的原因，首先需要知道 JS 的模块系统。常用的 JS 的模块系统有三个：
 * 1. CommonJS（简称 cjs）
 * 2. ES module（简称：esm）
 * 3. UMD
 * 4. AMD 现在用的比较少了，忽略掉
 * 
 * babel、TS 等编译器更加偏爱 cjs。默认情况下，代码里写的 esm 都会被 babel、TS 转成 cjs。这个原因我推测有以下几点：
 * 1. cjs 出现得比 esm 更早，所以已有大量的 npm 库是基于 cjs 的（数量远高于 esm），比如 react
 * 2. cjs 有着非常成熟、流行、使用率高的 runtime：Node.js，而 esm 的 runtime 目前支持非常有限（浏览器端需要高级浏览器，node 需要一些稀奇古怪的配置和修改文件后缀名）
 * 3. 有很多 npm 库是基于 UMD 的，UMD 兼容 cjs，但因为 esm 是静态的，UMD 无法兼容 esm
 * 
 * 回到上面那个问题。打开 react 库的 index.js：
 * ```js
 * exports.Children = Children;
 * exports.Component = Component;
 * exports.Fragment = REACT_FRAGMENT_TYPE;
 * exports.Profiler = REACT_PROFILER_TYPE;
 * ...
 * ```
 * 上面的代码相当于：
 * ```js
 * module.exports = {
 *  Children: Children,
 *  Component: Component
 * }
 * ```
 * 
 * ```js
 * import React from "react";
 * console.log(React);
 * ```
 * 会被编译为：
 * ```js
 * "use strict";
 * exports.__esModule = true;
 * var react_1 = require("react");
 * console.log(react_1["default"]);       // [很明显错误的地方]，显然会打印成 undefined，因为 react 的 module.exports 中根本就没有 default 这个属性。
 * ```
 * 
 * 这个问题引申出来的问题其实是，目前已有的大量的第三方库大多都是用 UMD / cjs 写的（或者说，使用的是他们编译之后的产物，
 * ，而编译之后的产物一般都为 cjs），但现在前端代码基本上都是用 esm 来写，所以 esm 与 cjs 需要一套规则来兼容。
 * 
 * 1. esm 导入 esm
 *    => 两边都会被转为 cjs，严格按照 esm 的标准写，一般不会出现问题。
 * 2. esm 导入 cjs
 *    => 引用第三方库时最常见，比如本文举例的 react
 *    => 兼容问题的产生是因为 esm 有 default 这个概念，而 cjs 没有。任何导出的变量在 cjs 看来都是 module.exports 这个对象上的属性，esm 的 default 导出也只是 cjs 上的 module.exports.default 属性而已
 *    => 导入方 esm 会被转为 cjs
 * 3. cjs 导入 esm
 *    => 一般不会这样使用
 * 4. cjs 导入 cjs
 *    => 不会被编译器处理
 *    => 严格按照 cjs 的标准写，不会出现问题
 * 
 * TS 默认编译规则：
 * 
 * 
 * 
 */

import CJSMath from "./modules/math_cjs";

console.log(CJSMath.cjsSum(33, 44));

import * as Math from "./modules/math";

console.log(Math.sum(1, 2));