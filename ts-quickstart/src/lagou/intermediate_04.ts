// type Exclude<T, U> = T extends U ? never : T;
type T = Exclude<'a' | 'b' | 'c', 'a'>; // => 'b' | 'c'
type NewPerson = Omit<Person, 'weight'>;
// 相当于
type NewPerson = Pick<Person, Exclude<keyof Person, 'weight'>>;
// 其中
type ExcludeKeys = Exclude<keyof Person, 'weight'>; // => 'name' | 'age'
