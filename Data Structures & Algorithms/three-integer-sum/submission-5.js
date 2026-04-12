class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        const result = [];
        for(let curr =0; curr<nums.length-2; curr++) {
            if(curr > 0 && nums[curr]==nums[curr-1])
            continue;
            let left=curr+1, right =nums.length-1;
            while(left<right) {
            const total = nums[curr]+ nums[left]+nums[right];
            if(total === 0) {
                result.push([nums[curr],nums[left],nums[right]]);
                left++;
                right--;
                while(left<right && nums[left]===nums[left-1]) left++;
                while(left<right && nums[right]==nums[right+1]) right--;
            }else if (total<0) {
                left++;
                while(left<right && nums[left]== nums[left-1]) {
                   left++; 
                }
            } else {
                right--;
                while(left<right && nums[right]==nums[right+1]) {
                    right--
                }
            }
        }
        }
        return result;
    }
}
