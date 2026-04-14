class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    // find the range where there should be the number
    // find the lower and upper range.. and move or slide the window 
    // based on the difference from lower and upper range
    findClosestElements(arr, k, x) {
        let left = 0; let right = arr.length-1;
        while(right-left +1 >k) {
            if(Math.abs(arr[left]-x)> Math.abs(arr[right]-x)){
                left++;
            } else {
                right--;
            }
        }
        return arr.slice(left, right+1)
        }
    }
