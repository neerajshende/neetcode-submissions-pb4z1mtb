class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let freqMap = {};

        for (let i=0;i<t.length;i++){
            const curr = t[i];
            freqMap[curr]=(freqMap[curr] || 0) + 1;
        }
        let start = 0; // Keep the track of start, this will keep changing
        let minStart = 0; // Keep the track of minStart, so that we can evaluate ans string
        let remaining = t.length; // remaining pending matching characters
        let minLength = Infinity; /// Keep the track of minLength substring found, so that we will evaluate actual answer later at the end;
        for(let end=0;end<s.length;end++){
            const curr = s[end];
            if(freqMap[curr]>0){
                remaining--;
            }
            freqMap[curr] = (freqMap[curr] || 0)-1;
            while(remaining === 0) {
               if(end-start+1 < minLength) {
                 minLength = end-start+1;
                 minStart = start;
               }
               let leftChar = s[start];
               freqMap[leftChar]++;
               if(freqMap[leftChar]>0) {
                remaining++;
               }
               start++;
            }
            
        }

        return minLength=== Infinity? "": s.slice(minStart, minStart+minLength);

    }
}
