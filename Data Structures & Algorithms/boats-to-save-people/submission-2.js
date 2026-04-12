class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a,b)=>a-b);
        let left=0,right=people.length-1;
        let boatRequired = 0;
        while(left<=right) {
            const current = people[left]+people[right];
            if( current <= limit) {
                left++;
                right--;
            } else {
                right--;
            }
            boatRequired++;
        }
        return boatRequired;
    }
}
