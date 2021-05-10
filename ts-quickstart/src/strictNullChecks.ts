// "strictNullChecks": true，由于 strictNullChecksVal 变量的类型是 string，下面的 undefined 赋值会提示错误
// 下面的 strictNullChecksValUndefined 变量，因为指定了 string | undefined，所以可以赋值 undefined
let strictNullChecksVal: string = "abc";
strictNullChecksVal = undefined;
let strictNullChecksValUndefined: string | undefined = "abc";
strictNullChecksValUndefined = undefined;

let users = [
  {
    id: "1",
    name: "jack"
  },
  {
    id: "2",
    name: "rose"
  }
]

function getUserNameById(id: string) {
  const user = users.find(user => user.id === id);
  // Object is possibly 'undefined'
  // 可以使用 user?.name 来返回
  // 判断处理
  // if (typeof article === "undefined") {
  //    throw new Error("Count not find username with id " + id); 
  // }
  return user.name;
}