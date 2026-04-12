class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const results = [];

        function backTracking(index, current) {
            if(index === nums.length) {
                results.push([...current]);
                return;
            }

            /// include the current element;
            current.push(nums[index]);
            backTracking(index+1, current);

            /// exclude the current element;
            current.pop();
            backTracking(index+1, current);
        }
        backTracking(0,[]);
        return results;
    }
}
