namespace FuncOverloadOriginal {
  function convert(x: string | number | null): string | number | -1 {
    if (typeof x === 'string') {
        return Number(x);
    }
    if (typeof x === 'number') {
        return String(x);
    }
    return -1;
  }
  const x1 = convert('1'); // => string | number
  const x2 = convert(1); // => string | number
  const x3 = convert(null); // => string | number

  console.log(x1, x2, x3);
}

