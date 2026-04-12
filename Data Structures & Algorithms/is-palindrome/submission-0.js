class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[\W_]/g,"").toLowerCase();
        let left = 0, right = cleanStr.length-1;
        while(left<right) {
            if(cleanStr[left] !== cleanStr[right])
                return false;
            left++;
            right --;
        }
        return true;
    }
}
