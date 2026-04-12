class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {

        const numbersKeysMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        }
        const result = [];


        function backtrack(currentAns,digitIndex) {
            if(currentAns.length === digits.length) {
                if(currentAns !== "") {
                    result.push(currentAns);
                }
                return;
            }

            const currentSeq = numbersKeysMap[digits[digitIndex]];
            for (let i = 0; i< currentSeq.length; i++) {
                currentAns = currentAns + currentSeq[i];
                backtrack(currentAns, digitIndex+1)
                currentAns = currentAns.slice(0,currentAns.length-1);
            }

        }
        backtrack("",0);
        return result;
    }
}
