class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let slow = 0, i = 0;
        while(i<nums.length) {
            if(nums[i] !==nums[slow]) {
                slow++;
               nums[slow] = nums[i];
            }
            i++;
           
            
        }
        return slow+1;
    }
}
