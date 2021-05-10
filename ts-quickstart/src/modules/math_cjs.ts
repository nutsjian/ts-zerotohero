function cjsSum(a: number, b: number) {
  return a + b;
}

function cjsDiv(a: number, b: number) {
  return a - b;
}

// exports.cjsSum = cjsSum;
// exports.cjsDiv = cjsDiv;

module.exports = {
  cjsSum: cjsSum,
  cjsDiv: cjsDiv
}

/**
 * 相当于：
 * 
 * module.exports = {
 *  cjsSum: cjsSum,
 *  cjsDiv: cjsDiv
 * }
 * 
 */
