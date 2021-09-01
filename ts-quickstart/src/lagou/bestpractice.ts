// [1] 最佳实践1
// 使用类型别名定义函数类型，这是推荐的定义函数类型的方式
// 当然也可以使用内联类型来定义函数类型
// 但是不推荐使用接口类型定义函数类型
type StudyLanguageType = (language: ProgramLanguage) => void
// 类型别名
let StudyLanguage: StudyLanguageType = language => console.log(`${language.name} ${language.age()}`);
// 内联类型
let StudyLanguage2: ((languange: ProgramLanguage) => void) = language => console.log(`${language.name} ${language.age()}`);



