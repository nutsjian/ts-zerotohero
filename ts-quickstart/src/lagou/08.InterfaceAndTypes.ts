// 方法定义
function Study(language: { name: string; age: () => number }) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years ago.`);
}

// 方法调用1，正常
Study({
  name: 'TypeScript',
  age: () => new Date().getFullYear() - 2012
});

// 方法调用2，报错，因为 name 类型不一致
// Study({
//   name: 2,
//   age: () => new Date().getFullYear() - 2012
// });

// 方法调用3，报错，因为缺少 age 属性
// Study({
//   name: 'TypeScript'
// });

// 方法调用4，报错，因为多传入了参数 id
/** ts(2345) 实参(Argument)与形参(Parameter)类型不兼容，不存在的属性 id */
// Study({
//   id: 2,
//   name: 'TypeScript',
//   age: () => new Date().getFullYear() - 2012
// });

// 方法调用5
// 【注意】：这里把参数做成单独的变量定义在方法调用外面，然后在调用的时候
// 传入该参数，则不会报错（虽然有多余的 id）
// 为什么呢？
// 
let ts = {
  id: 2,
  name: 'TypeScript',
  age: () => new Date().getFullYear() - 2012
};
Study(ts); // ok


// 最佳实践
/** 关键字 接口名称 */
interface ProgramLanguage {
  /** 语言名称 */
  name: string;
  /** 使用年限 */
  age: () => number;
}

function NewStudy(language: ProgramLanguage) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years ago.`);
}


////// ------------------- 分隔符 -------------------
let TypeScript: ProgramLanguage;

TypeScript = {
  name: 'TypeScript',
  age: () => new Date().getFullYear() - 2012
}

// 错误1，没有填写必填属性值
// TypeScript = {
// }

// 错误2，缺少 age 属性值
// TypeScript = {
//   name: 'TypeScript'
// }

// 错误3，错误的属性值类型
// TypeScript = {
//   name: 2,
//   age: 'Wrong Type'
// }

// 错误4，多余的属性 id，会造成错误提示
// TypeScript = {
//   name: 'TypeScript',
//   age: () => new Date().getFullYear() - 2012,
//   id: 1
// }



