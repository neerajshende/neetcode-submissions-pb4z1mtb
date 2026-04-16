class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0; let right = nums.length-1;
        while(left<=right) {

            if(nums[left]=== val ) {
                while(left<=right && nums[right]=== val) {
                    right--;
                }
                if(left<right) {
                    [nums[left],nums[right]]= [nums[right], nums[left]];
                    right--;
                }
            } else {
                left++;
            }
        }
        return right+1;
    }
}
