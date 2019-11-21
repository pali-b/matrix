const utils = require("./utils");
const matrix1 = [[1,4,7],[2,5,8],[3,6,9]];
const matrix2 = [[1,2],[5,6],[2,4]];

let result = utils.multiplyMatrices(matrix1,matrix2);
utils.outputResult(result);