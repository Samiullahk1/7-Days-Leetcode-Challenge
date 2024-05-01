
function convert(s, numRows) {
    let rows = [];

    let currentRow = 0;

    let goingUp = true;

    for (let i = 0; i < s.length; i++) {
        if (!rows[currentRow]) {
            rows[currentRow] = [];
        }
        
        rows[currentRow].push(s[i]);

        if (goingUp) {
            currentRow++;
        } else {
            currentRow--;
        }

        if (currentRow + 1 === numRows) {
            goingUp = false;
        } else if (currentRow === 0) {
            goingUp = true;
        }
    }

    let result = '';
    for (let row of rows) {
        result += row.join('');
    }

    return result;
}

console.log(convert("PAYPALISHIRING", 3)); 
