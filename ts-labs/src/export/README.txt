1. 对于 export default 的变量，TS 会将其放在 module.exports 的 default 属性上
// before
export default {
  name: "esm default"
}
//after
exports["default"] = {
    name: "esm default"
};

2. 对于 export 的变量，TS 会将其放在 module.exports 对应变量名的属性上
// before
export const name = "esm";
// after
exports.name = "esm";

3. 额外给 module.exports 增加一个 __esModule: true 的属性，用来告诉编译器，这本来是一个 esm 模块
exports.__esModule = true;