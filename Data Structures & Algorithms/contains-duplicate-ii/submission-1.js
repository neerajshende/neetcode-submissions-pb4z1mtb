class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const uniqueSet = new Set();
        for(let i=0; i<nums.length; i++) {
            if(uniqueSet.has(nums[i])) {
                return true;
            }
            uniqueSet.add(nums[i]);
            if(uniqueSet.size >k){
                uniqueSet.delete(nums[i-k]);
            }
        }
        return false;
    }
}
