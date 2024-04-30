/**
 * @param {number} 
 * @return {string} 
 */
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let remaining = num; 
    let result = ''; 
    for (let i = 0; remaining > 0 && i < values.length; i++) {
        while (values[i] <= remaining) {
            remaining -= values[i]; 
            result += symbols[i]; 
        }
    }

    return result;
};
