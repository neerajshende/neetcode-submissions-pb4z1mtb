class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let str of strs) {
            result += str.length + '#' + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i= 0;
        while(i<str.length) {
            let j =i;
            let lengthOfNextWord = 0;
            while(str[j] !== '#'){
                j++;
            }
            lengthOfNextWord = Number(str.slice(i, j));
            const strStart = j+1;
            const strEnd = strStart + lengthOfNextWord;
            const word = str.slice(strStart, strEnd);
            result.push(word);
            i = strEnd;
        }
        return result;
    }
}
