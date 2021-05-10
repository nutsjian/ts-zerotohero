// TypeScript 非严格模式，下面的代码，明显会出现 TypeError: Cannot read property 'toLowerCase' of undefined 错误
// 严格模式：true
// username 会提示错误信息
class User {
  username: string
}

const user = new User();
const username = user.username.toLocaleLowerCase();

// =========================================================  分割线  ===============================================================================
// 解决方案
//// 1. string | undefined，这样在调用 userCase1.username.toLowerCase() 的时候会提示错误信息，强制要求你处理这种潜在的问题
class UserCase1 {
  username: string | undefined
}
const userCase1 = new UserCase1();
// userCase1.username?.toLowerCase();
const usernameCase1 = userCase1.username.toLowerCase();


//// 2. 属性值显示初始化，虽然不会因为调用 toLowerCase() 报错，但是还是因为开启了严格检查而提示错误信息。
class UserCase2 {
  username: "n/a";
}

const userCase2 = new UserCase2();
const usernameCase2 = userCase2.username.toLowerCase();


//// 3. 在构造函数种赋值 【最有用的解决方案】
class UserCase3 {
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}
const userCase3 = new UserCase3("jack");
const usernameCase3 = userCase3.username.toLowerCase();

//// 3.x 还可以通过 public 修饰符进一步简化构造函数
class UserCase4 {
  constructor(public username: string) {}
}
const userCase4 = new UserCase4("rose");
const usernameCase4 = userCase4.username.toLowerCase();

//// 4. 显示赋值断言
// 在某些场景下，属性会被间接地初始化（使用辅助方法或依赖注入库）。
// 这种情况下，你可以在属性上使用显式赋值断言来帮助类型系统识别类型。
class UserCase5 {
  // 【关键】，!: 显示赋值断言，如果不加上 !，typescript 检查会提示错误信息
  username!: string;

  constructor(username: string) {
    this.initialize(username);
  }

  private initialize(username: string) {
    this.username = username;
  }
}

const userCase5 = new UserCase5("zsmj");
const usernameCase5 = userCase5.username.toLowerCase();
// 通过向该username属性添加一个明确的赋值断言，我们告诉类型检查器：
// username，即使它自己无法检测到该属性，也可以期望该属性被初始化。