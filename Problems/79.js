/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word){
    var result = []
    var rows = board.length
    var cols = board[0].length
    var wordLen = word.length
    for(var m = 0; m <= rows-1; ++m){
        result[m] = []
        for(var n = 0; n <= cols-1; ++n){
            result[m][n] = ''
        }
    }
    function DFS(board, x, y, index){
        if(index === wordLen){
            return true
        }
        result[x][y] = -1
        var str = word[index]
        // 上移
        if(x - 1 >= 0 && result[x-1][y] !== -1 && str == board[x-1][y]){
            if(DFS(board, x-1, y, index+1))    return true
        }
        // 下移
        if(x + 1 < rows && result[x+1][y] !== -1 && str == board[x+1][y]){
            if(DFS(board, x+1, y, index+1))    return true
        }
        // 左移
        if(y - 1 >= 0 && result[x][y-1] !== -1 && str == board[x][y-1]){
            if(DFS(board, x, y-1, index+1))    return true
        }
        // 右移
        if(y + 1 < cols && result[x][y+1] !== -1 && str == board[x][y+1]){
            if(DFS(board, x, y+1, index+1))    return true
        }
        result[x][y] = 0
        return false 
    }
    for(var i = 0; i <= rows - 1; ++i){
        for(var j = 0; j <= cols - 1; ++j){
            if(word[0] == board[i][j]){
                if(DFS(board, i, j, 1)) return true
            }
        }
    }
    return false
};
["ABCE",
"SFES",
"ADEE"]
"ABCESEEEFS"
var board = ["ABCE","SFES","ADEE"]
var word = 'ABCESEEEFS'
console.log(exist(board, word))