class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numsFreq = {};
        const threshold = Math.ceil(nums.length/2);
        for(let i =0; i<nums.length; i++) {
            const curr = nums[i];
            numsFreq[curr] = (numsFreq[curr] ||0) +1;
            if(numsFreq[curr] ===threshold) {
                return curr;
            }
        }
        return false;
    }
}
