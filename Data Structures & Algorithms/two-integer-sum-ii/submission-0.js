class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, right = numbers.length-1;
        while(numbers[left]+numbers[right] !== target){
            const total = numbers[left] + numbers[right];
            if(total<target) {
                left++;
            } else if(total>target) {
                right--;
            }
        }
        return [left+1, right+1];
    }
}
