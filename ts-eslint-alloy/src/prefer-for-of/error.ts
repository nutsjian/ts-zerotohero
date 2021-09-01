function perferForOfError(arr: any[]) {
  let items = [];
  for (let i = 0; i < arr.length; i++) {
    items.push(arr[i]);
  }
  return items;
}
// perferForOfError([1, 2]);
perferForOfError([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
