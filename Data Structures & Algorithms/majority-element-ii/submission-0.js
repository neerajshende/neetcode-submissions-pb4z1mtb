class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const result = [];
        const freqMap = {};
        const threshold = Math.floor(nums.length/3);
        for(let num of nums) {
            freqMap[num] = (freqMap[num] || 0)+1;
        }
        for(let key of Object.keys(freqMap)) {
            if(freqMap[key]>threshold) {
                result.push(Number(key));
            }
        }
        return result;
    }
}
