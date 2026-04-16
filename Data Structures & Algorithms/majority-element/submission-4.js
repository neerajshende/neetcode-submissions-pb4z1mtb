class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // const numsFreq = {};
        // const threshold = Math.floor(nums.length/2);
        // for(let i =0; i<nums.length; i++) {
        //     const curr = nums[i];
        //     numsFreq[curr] = (numsFreq[curr] ||0) +1;
        //     if(numsFreq[curr] >threshold) {
        //         return curr;
        //     }
        // }
        // return false;

        ///Boyer Moore Algorith- Majority of elenments can cancel out others

        let candidate = null;
        let count = 0 ;
        for(let num of nums) {
            if(count=== 0) {
                candidate = num;
            }
            count += num===candidate? 1: -1;
        }
        return candidate;
    }
}
