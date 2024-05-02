/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prevCount = 0, totalCount = 0;

    for (const floor of bank) {
        const count = floor.split('').reduce((acc, c) => acc + parseInt(c), 0);
        if (count > 0) {
            totalCount += prevCount * count;
            prevCount = count;
        }
    }

    return totalCount;
};