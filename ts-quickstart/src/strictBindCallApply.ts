// 在你不记得参数类型时，非严格模式下不会校验参数类型和数量，运行代码时，Typescript 和环境（可能是浏览器）都不会引发错误：
function sum(num1: number, num2: number) {
  return num1 + num2;
}

let val = sum.apply(null, [1, 2]);
console.log(val);

// 严格模式，会检查函数参数，提示错误信息：Source has 3 element(s) but target allows only 2.
// 如果是非严格模式下，下面就不会提示错误信息，结果还是 3
let val2 = sum.apply(null, [1, 2, 3]);
console.log(val2);

// 【重点关注点】
// 那怎么办呢？ ... 扩展运算符和 reduce 老友来相救
function sumV2(...args: number[]) {
  return args.reduce((total, num) => total + num, 0);
}

let val3 = sumV2.apply(null, [1, 2, 3]);
// 这里的结果就是：6
console.log(val3);