function findSomething(arr: any[]) {
  for (let item of arr) {
    if (isSomething(item)) {
      return item;
    } else {
      throw new Error("Doesn't exist.");
    }
  }
}

function isSomething(item: any) {
  return true;
}

findSomething([1, 2]);
