function perferForOfOk(arr: any[]) {
  let items = [];
  for (let i of arr) {
    items.push(i);
  }
  return items;
}
perferForOfOk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
