class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;
        let left=0,right=height.length-1;
        let lMax = 0, rMax=0;
        while(left<right) {
            lMax = Math.max(lMax, height[left]);
            rMax = Math.max(rMax, height[right]);
            if(lMax<rMax) {
                maxWater += lMax-height[left];
                left++;
            } else {
                maxWater += rMax-height[right];
                right--;
            }

        }
        return maxWater;
    }
}
