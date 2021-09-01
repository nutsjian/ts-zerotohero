// 如果 map 没有 return
// 则 _arrayCallbackReturn 的值是 undefined
const _arrayCallbackReturnError = [1, 2, 3].map((num) => {
  console.log(num * num);
});

console.log(typeof _arrayCallbackReturnError[0]);
