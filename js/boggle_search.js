process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function findWords(board, dictionary) {
    var foundWords = []
    
    for(var i=0; i<dictionary.length; i++){
        var result = isPresent(board, dictionary[i])
        if(result){
            foundWords.push(dictionary[i])
        }
    }
    return foundWords
}

function isPresent(board, word) {
    // Does the right thing
    var wordToChars = word.split("/")
    // wstream.write(wordToChars+"\n");
    for(var i=0;i<board.length; i++){
        wstream.write(board[i]+"\n");
        for(var j=0; j<board[i].length; i++){
            if(board[i][j] === wordToChars[0]) {
                if(searchForWord(board, word[i], i, j)) {
                    return true;
                }
            }
            //match true for ["t", "o"]
        }
    }
        // "to", "too", "tot"
        
    return false;
}

function searchForWord(board, word, starting_x, starting_y) {
    if(word.length == 0) {
        return true;
    }
    
    next_word = word.substring(1,word.length);
    for(var i=-1; i<=1; i++) {
        for(var j=-1; j<=1; j++) {
            next_x = starting_x+i;
            next_y = starting_y+j;
            
            if(next_x < 0 || next_x >= board.length || next_y < 0 || next_y >= board.length 
                || (next_x === starting_x && next_y === starting_y)
            ) {
                continue;
            }
            
            if(board[next_x][next_y] === word[0] && searchForWord(board, next_word, next_x, next_y)) {
                return true;
            }
        }
    }
    return false;
}

var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    res = findWords(
        [
            ['t','o'],
            ['t','s']
        ],
        
        ["to", "too", "tot", "tots", "toast"]
    );
    
    for(var res_i=0; res_i < res.length; res_i++) {
        wstream.write(res[res_i]+"\n");
    }
    
    wstream.end();
    
    // Expected:
    // to
    // tot
    // tots
});
