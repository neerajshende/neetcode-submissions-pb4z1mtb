class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
       let result="";
       let maxLength = Math.max(word1.length, word2.length);
       let i=0;
       while(i<maxLength) {
        if(i<word1.length)
            result += word1[i];
        if(i<word2.length)
            result += word2[i];
        i++;
       }
       return result;
    }
}
