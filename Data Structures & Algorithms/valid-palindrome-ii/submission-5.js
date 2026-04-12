class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        const validPalindrom = function(left,right, str) {
            while(left<right) {
                if(str[left]!==str[right])
                return false;
                left++;
                right--;
            }
            return true;
        }

        const cleanedStr = s.replace(/[\W_]/g, "");
        let l=0,r=cleanedStr.length-1;
        while(l<r){
            if(cleanedStr[l]!==cleanedStr[r]) {
                return validPalindrom(l+1,r, cleanedStr) || validPalindrom(l,r-1, cleanedStr);
            }
            l++;
            r--;
        }
        return true;
    }
}
