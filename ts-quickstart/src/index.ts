console.log("hello typescript")

type Genger = "male" | "female"

// Person 接口类型
interface Person {
  name: string;
  age?: number;
  gender: Genger;
}

// 定义一个 Person 类型变量
let me: Person = {
  name: "nutsjian",
  age: 18,
  gender: "male"
}
// 打印
console.log(me);


let a = {}
a.name = "asd";