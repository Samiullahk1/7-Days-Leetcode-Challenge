var canJump = function(nums) {
    if (nums.length === 1) {
        return true;
    }
    const canReachEnd = (index) => {
        if (index < nums[0]) {
            return true;
        }       
        for (let i = 0; i < index; i++) {
            if (nums[i] >= index - i) {
                return canReachEnd(i);
            }
        }
        return false;
    };
    return canReachEnd(nums.length - 1);
};
