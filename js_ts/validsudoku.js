/**
 * Valid Sudoku
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.
Example 1:


Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
Example 2:

Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.
 */

/**
 * gemini - code generated
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Initialize three arrays of Sets to track numbers seen in rows, columns, and 3x3 sub-boxes.
    // Each array has 9 elements, corresponding to each row, column, or box.
    const rows = new Array(9).fill(null).map(() => new Set());
    const cols = new Array(9).fill(null).map(() => new Set());
    const squares = new Array(9).fill(null).map(() => new Set());

    
    // Iterate through the Sudoku board.
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            
            // 1. Skip empty cells.
            if (num === '.') {
                continue;
            }

            // 2. Calculate the index for the 3x3 sub-box.
            //    - The board is divided into a 3x3 grid of sub-boxes.
            //    - The index is calculated by using integer division on the row and column.
            const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // 3. Check for duplicates.
            //    - If the number already exists in the current row, column, or sub-box, the board is invalid.
            if (rows[r].has(num) || cols[c].has(num) || squares[squareIndex].has(num)) {
                return false;
            }

            // 4. Add the number to the Sets for the current row, column, and sub-box.
            rows[r].add(num);
            cols[c].add(num);
            squares[squareIndex].add(num);
        }
    }

    // If the entire board is traversed without finding any duplicates, it is valid.
    console.log(rows)
    return true;
};

// Test Case 1: Complete & Valid
// • This is a fully solved and correct Sudoku board.
const board1 = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
];
console.log(isValidSudoku(board1)); // Expected Output: true

// Test Case 2: Almost Complete
// • This board has some empty cells ('.') but is still a valid configuration.
const board2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board2)); // Expected Output: true
