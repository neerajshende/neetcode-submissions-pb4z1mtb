class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frequencyMap = {};
        let maxFrequency = 0 ;
        let start = 0;
        let longest = 0;
        for(let end=0;end<s.length;end++) {
            const curr= s[end];
            frequencyMap[curr] = (frequencyMap[curr] || 0) + 1;
            maxFrequency = Math.max(maxFrequency, frequencyMap[curr]);
            if(end-start-maxFrequency+1 > k) {
                frequencyMap[s[start]]--;
                start++;
            }
            longest = Math.max(longest, end-start+1)
        }
        return longest;
    }
}
