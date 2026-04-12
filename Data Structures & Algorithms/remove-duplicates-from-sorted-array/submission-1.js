class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let slow= 0;
        for(let fast=0; fast<nums.length;fast++) {
            if(nums[slow]!==nums[fast]){
                slow++;
                nums[slow]=nums[fast];
            }
        }
        return slow+1;
    }
}
