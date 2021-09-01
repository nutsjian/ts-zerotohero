const _arrayCallbackReturnOk = [1, 2, 3].map((num) => {
  console.log(num * num);
  return num * num;
});

console.log(_arrayCallbackReturnOk);
