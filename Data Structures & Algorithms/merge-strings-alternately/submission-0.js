class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let currIndex = 0;
        let maxLength = Math.max(word1.length, word2.length);
        while(currIndex !== maxLength) {
            if(word1[currIndex]) {
                result = result.concat(word1[currIndex]);
            }
            if(word2[currIndex]){
                result = result.concat(word2[currIndex]);
            }
            currIndex++;
        }
        return result;
    }
}
