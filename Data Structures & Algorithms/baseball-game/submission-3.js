class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(let op of operations) {
            if(Number.isInteger(Number(op))) {
                stack.push(Number(op));
            } else if(op ==='C') {
                stack.pop();
            } else if(op==='D') {
                stack.push(stack[stack.length-1]*2);
            } else {
                const len = stack.length;
                stack.push(stack[len-1]+stack[len-2]);
            }
            
        }
        return stack.reduce((a,b)=>a+b,0);
    }
}
