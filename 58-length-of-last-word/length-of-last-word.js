function lengthOfLastWord(s) {
    let lengthOfLast = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            lengthOfLast++;
        } else {
            if (lengthOfLast > 0) {
                return lengthOfLast;
            }
        }
    }

    return lengthOfLast;
}

