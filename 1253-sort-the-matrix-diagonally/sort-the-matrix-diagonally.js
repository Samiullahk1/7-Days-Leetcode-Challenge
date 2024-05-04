function diagonalSort(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const diagonalMap = new Map();

    const sortedMatrix = Array(numRows).fill('').map(_ => []);

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const diagonalIndex = row - col;

            const diagonalArray = diagonalMap.get(diagonalIndex) || [];

            diagonalArray.push(matrix[row][col]);

            diagonalMap.set(diagonalIndex, diagonalArray);
        }
    }

    diagonalMap.forEach(diagonalArray => diagonalArray.sort((a, b) => a - b));

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const diagonalIndex = row - col;

            const sortedDiagonal = diagonalMap.get(diagonalIndex);

            sortedMatrix[row][col] = sortedDiagonal.shift();
        }
    }

    return sortedMatrix;
}
