// noImplicitThis: false
// --- 在非严格模式下，this 指向 config 对象，this.label 只需检索 config.label
// noImplicitThis: true
// --- 在严格模式下，this 在函数上进行引用可能是不明确的，所以提示错误信息，因为如果单独执行 uppercaseLabel() 则会因为山下问 config 不存在而报错。
function uppercaseLabel() {
  return this.label.toUpperCase();
}

const config = {
  label: "foo-config",
  uppercaseLabel
};

let label = config.uppercaseLabel();

console.log(label);

// 单独调用会报错，所以 noImplicitThis 的强制检查还是有必要的，防止编码不规范导致的各种问题
// uppercaseLabel();


// 最佳实践：
// 更好的方法是编写接口，定义所有类型，而不是Typescript来推断：
interface MyConfig {
  label: string;
  uppercaseLabel: (params: void) => string;
}

const cfg: MyConfig = {
  label: "foo-config",
  uppercaseLabel() {
    return this.label.toUpperCase()
  }
};

let cfgUpperCase = cfg.uppercaseLabel();
console.log(cfgUpperCase);
