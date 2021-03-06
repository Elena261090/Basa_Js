var boardLines = 10;      
var boardColumns = 10;    
var boardText =
[
    [' ','A','B','C','D','E','F','G','H',' '],
    ['1','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','1'],
    ['2','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','2'],
    ['3',' ',' ',' ',' ',' ',' ',' ',' ','3'],
    ['4',' ',' ',' ',' ',' ',' ',' ',' ','4'],
    ['5',' ',' ',' ',' ',' ',' ',' ',' ','5'],
    ['6',' ',' ',' ',' ',' ',' ',' ',' ','6'],
    ['7','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','7'],
    ['8','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','8'],
    [' ','A','B','C','D','E','F','G','H',' ']
]; 

window.onload = init;

function init(){
    FillInTheChessBoard();
}

function FillInTheChessBoard() {
var board = document.createElement("table"); 
board.className += 'tableStyle';
 

for(var i = 0; i < boardLines; i++){
var str = document.createElement("tr");

for(var j = 0; j < boardColumns; j++) {
var colum = document.createElement("td");
    if(i == 0 || j == 0 || i == boardLines - 1 || j == boardColumns - 1) {
        if(j == boardColumns - 1 || i == 0){
        colum.className += 'rotate';
        }
    } else {
        colum.className = (i + j) % 2 == 0 ? 'whiteColum' : 'blackColum';
        }
        colum.innerHTML = boardText[i][j];
        str.appendChild(colum);
        }
    board.appendChild(str);
    }

    document.getElementById('chess').appendChild(board);
}

