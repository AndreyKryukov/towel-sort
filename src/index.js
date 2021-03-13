
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  } else {
    let newString = "";
    let i = 1;
    for (let value of matrix) {
      if (i % 2 == 0) {
        value.reverse();
      }
      if (i == 1) {
        newString += value.join(',');
      } else {
        newString += ',' + value.join(',');
      }
      i++;
    }
    return newString.split(',');
  }
}
