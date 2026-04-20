class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    // Prefix sum--> calculate the sum at each number and store it in map
    // prefixSum[i+1,j]= prefix[j]-prefix[i]
    // k = prefix[j]-prefix[i]
    // prefix[i]= prefix[j]-k;
    // prefix[j] will be sum+ num
    // so prefix[i] will be needed element which previously occured, which we will check this in map

    subarraySum(nums, k) {
        let map ={0:1};
        let sum = 0;
        let count =0;
        for(let num of nums) {
            sum +=num;
            if(map[sum-k]) {
                count +=map[sum-k];
            }
            map[sum] = (map[sum] || 0)+1;
        }
        return count;
    }
}
