class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
       //[1,2,3,4,5,6,7]
       //[1,2,3,4---->,5,6,7] ---> split it in 2
       // Now swap individuals [5,6,7,--->1,2,3,4] ===> This is what we want
       //So basically we can swap the 2 blocks But we want it in O(1) space
       // So now we left with reverse whole array that works inspace.
      //====================first approach
       // reversing makes [7,6,5,4,3,2,1]
       //now break it into 2 blocks and reverse in individually
       // [5,6,7,===>1,2,3,4,] and this is what we want.
       ///=============
       /// break it into 2 ==>  [1,2,3,4,===>5,6,7];
       //Reverse individually==> [4,3,2,1,===>7,6,5]
       //Now reverse whole ===> [5,6,7,1,2,3,4,5]----> And thats the answer
       k = k%nums.length;
       const reverse = (left,right)=> {
        while(left<right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
       }
       reverse(0,nums.length-1); // Whole array reverse
       reverse(0,k-1 );// reverse first k elements
       reverse(k, nums.length-1);// reverse rest
    }
}
