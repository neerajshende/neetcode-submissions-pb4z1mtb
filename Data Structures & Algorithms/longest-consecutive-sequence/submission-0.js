class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums || !nums.length) return 0;
        const numSet = new Set(nums);
        let longest = 0;
        for(let num of nums) {
            if(!numSet.has(num-1)) {
                let currentNum = num;
                let count = 1;
                while(numSet.has(currentNum+1)) {
                    count = count+1;
                    currentNum = currentNum+1;
                }
                longest = Math.max(count,longest);
            }
        }
        return longest;
    }
}
