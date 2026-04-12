class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const results = [];
        nums.sort((a,b)=> a-b);

        function backtracking(index, current) {
            if(index === nums.length) {
                results.push([...current]);
                return;
            }
            /// include the current number;
            current.push(nums[index]);
            backtracking(index+1, current);

            let idx = index+1;
            while(idx <nums.length && nums[idx] === nums[idx-1]) {
                idx++;
            }
            // exclude the current number
            current.pop();
            backtracking(idx, current);

        }
        backtracking(0,[]);
        return results;
    }
}
