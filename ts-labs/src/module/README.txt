1. my_cjs_module.ts 编译前后
// before
exports.name = "abc";
exports.add = function(a, b) {
  return a + b;
}

// after
exports.name = "abc";
exports.add = function (a, b) {
    return a + b;
};

2. my_esm_module.ts 编译前后
// before
const helloworld = "esm";
function sayHello() {
  return "hello esm";
}
export default sayHello;

// after
// 会有一个 __esModule 的标识，并且会在 exports 有 default 属性，因为 ESModule 规定了 exports 上有 default 属性
"use strict";
exports.__esModule = true;
var helloworld = "esm";
function sayHello() {
    return "hello esm";
}
exports["default"] = sayHello;