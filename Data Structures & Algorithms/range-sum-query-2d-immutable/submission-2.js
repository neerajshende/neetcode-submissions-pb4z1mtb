class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        let r = this.matrix.length;
        let c = this.matrix[0].length;
        this.prefix = Array.from({length: r+1}, ()=>{
           return Array(c+1).fill(0);
        })
        for(let i=1; i<=r;i++) {
            for(let j=1; j<=c; j++) {
                this.prefix[i][j] = this.matrix[i-1][j-1] + this.prefix[i-1][j] 
                        + this.prefix[i][j-1] - this.prefix[i-1][j-1];
            }
        }
    }

    sumRegion(row1, col1, row2, col2) { 
        return this.prefix[row2+1][col2+1] -this.prefix[row1][col2+1]-this.prefix[row2+1][col1]
                        + this.prefix[row1][col1];
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    // Bruteforce*********************************************
    // sumRegion(row1, col1, row2, col2) {
    //     let result = 0;
    //     for(let row = row1; row<=row2; row++) {
    //         for(let col=col1; col<=col2; col++) {
    //             const currentValue = this.matrix[row][col];
    //             result += currentValue;
    //         }     
    //     }

    //     return result;
    // }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
