class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxCapacity = 0;
        let left =0, right = heights.length-1;
        while(left<right) {
            const currentArea = Math.min(heights[left], heights[right])* (right-left);
            maxCapacity = Math.max(currentArea, maxCapacity);
            heights[left]<heights[right] ? left++: right--;
        }
        return maxCapacity;

    }
}
