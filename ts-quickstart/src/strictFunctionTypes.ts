// 该规则将检查并限制函数类型参数是抗变（contravariantly）而非双变（bivariantly，即协变或抗变）的。
// 初看，内心OS： “这什么玩意儿？”，这里有篇介绍：
// https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance
// 协变和逆变维基上写的很复杂，但是总结起来原理其实就一个。

// 子类型可以隐性的转换为父类型
// 说个最容易理解的例子，int和float两个类型的关系可以写成下面这样。
// int ≦ float ：也就是说int是float的子类型。
// 这一更严格的检查应用于除方法或构造函数声明以外的所有函数类型。方法被专门排除在外是为了确保带泛型的类和接口（如 Array ）总体上仍然保持协变。
// 请看下面这个 Animal 是 Dog 和 Cat 的父类型的例子：

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

let f1: (x: Animal) => void;
let f2: (x: Dog) => void;
let f3: (x: Cat) => void;

f1 = f2;  // 启用 --strictFunctionTypes 时错误
f2 = f1;  // 正确
f2 = f3;  // 错误

// 1、第一个赋值语句在默认的类型检查模式中是允许的，但是在严格函数类型模式下会被标记错误。
// 2、而严格函数类型模式将它标记为错误，因为它不能 被证明合理。
// 3、任何一种模式中，第三个赋值都是错误的，因为它 永远不合理。


// 用另一种方式来描述这个例子则是，默认类型检查模式中 T在类型 (x: T) => void是 双变的，但在严格函数类型模式中 T是 抗变的：

interface Comparer<T> {
  compare: (a: T, b: T) => number;
}

let animalComparer: Comparer<Animal>;
let dogComparer: Comparer<Dog>;

animalComparer = dogComparer;   // 错误
dogComparer = animalComparer;   // 正确