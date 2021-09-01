type IntersectionTypeConfict = { id: number; name: string; } 
    & { age: number; name: number; };
  const mixedConflict: IntersectionTypeConfict = {
    id: 1,
    name: 2, // ts(2322) 错误，'number' 类型不能赋给 'never' 类型
    age: 2
  };

  type BorderColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string & {}; // & {} 黑魔法，IDE自动提示
  let borderColor: BorderColor = 'red';




type UnionInterce =
| {
  age: number;
}
| ({
  age: never;
  [key: string]: string;
});
const O: UnionInterce = {
  age: 2,
  string: 'string',
  jack: 'jack',
  age1: 'age1',
};
