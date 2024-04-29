function longestCommonPrefix(strs) {
    strs.sort();

    let commonPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return commonPrefix;
        }

        commonPrefix += strs[0][i];
    }

    return commonPrefix;
}

