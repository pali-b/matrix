// function that multplies two matrices

function multiplyMatrices(matrix1 , matrix2) {
    if(matrix1[0].lenght !== matrix2.lenght) {
        return null;
    }

    let product = [];
    let sumOfProducts = 0;

    for(let i = 0; i < matrix1.length ; i++){
        product.push([]);
        for(let j = 0; j < matrix2[0].length ; j++){
            for(let k = 0; k < matrix2.length ; k++){
                sumOfProducts += matrix1[i][k] * matrix2[k][j];
            }
            product[i].push(sumOfProducts);
            sumOfProducts = 0;
        }
    }
    return product;
}

function outputResult(mat) {
    if(mat === 0){
        return null;
    }
    for(let row = 0 ; row < mat.length ; row++) {
        for(let col = 0 ; col < mat[0].length ; col++) {
            process.stdout.write(mat[row][col] + "\t");
        }
        process.stdout.write("\n");
    }
}

module.exports = {
    multiplyMatrices,
    outputResult,
}