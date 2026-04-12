class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */

    solveNQueens(n) {
        const board = Array.from({length:n}, ()=> Array(n).fill('.'));
        function isSafe(row, col) {

            //check in the same column
            for (let i = 0; i<n; i++) {
                if(board[i][col]=== 'Q') {
                    return false;
                }
            }
            //check left diagonal
            for(let i=row,j=col; i>=0 && j>=0;i--,j--) {
                if(board[i][j]=== 'Q') {
                    return false;
                }
            }
            //check right diagonal
            for (let i=row,j=col;i>=0 && j<n;i--,j++) {
                if(board[i][j]=== 'Q') {
                    return false;
                }
            }
            return true;
        }

        const result = [];
       

        function checkIfCanPlace(r) {
            if (r=== n) {
                const resultStringArray = board.map(row=>row.join(''));
                result.push(resultStringArray);
                return;
            }
            for(let col = 0; col<n; col++) {
                if(isSafe(r,col)) {
                    board[r][col] = 'Q';
                    checkIfCanPlace(r+1);
                    board[r][col] = '.';
                }
            }

        }
        checkIfCanPlace(0);
        return result; 
    }
}
