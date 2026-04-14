class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length> s2.length) {
            return false;
        }
        // const s1Map = {};
        // for (let i=0;i<s1.length;i++) {
        //     s1map[s1[i]] = (s1map[s1[i]] || 0)+1;
        // }
        // let start = 0;
        // for(let i=0; i<s2.length;i++) {
        //     if(!s1Map[s2[i]]) {
        //         start = i+1;
        //     }
        //     if(i-start+1>s1.length) {
        //         s1map[s2[start]]++;
        //         start++;
        //     }

        // }
        const sortedS1 = s1.split("").sort().join("");
        let start = 0;
        for(let i=0; i<s2.length;i++) {
            if(i >= s1.length-1) {
                if(s2.slice(start,i+1).split("").sort().join("") === sortedS1) {
                    return true;
                } 
                start++;
            }
        }
        return false;
    }
}
