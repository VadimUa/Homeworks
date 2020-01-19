var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var x = 0,
    y = 0;
    var m = prompt("size");
    var count=0;
var direction = 'right';
var numberPosition = 0;
var innerDimension;
var dimension = m-1;
var oldPosition;

var matrix = createMatrix(m, m);

fillMatrix();

console.log(matrix);

function fillMatrix(){

    if (!numbers.length) return;

    var num = numbers.shift();

    matrix[x][y] = num;

    ++numberPosition;

    if (innerDimension === 0) return;

   
if (innerDimension === 1) {
        getNextDirection();
        setNextPosition();
        innerDimension = 0;
        fillMatrix();
        return;
    }

  
if (numberPosition === innerDimension || numberPosition === dimension) {
        getNextDirection();
        setNextPosition();
        oldPosition = numberPosition;
        innerDimension = dimension -1;
        fillMatrix();

        return;

    }
if (numberPosition === oldPosition + innerDimension || numberPosition === oldPosition + (innerDimension * 2)) {

        if (numberPosition === oldPosition + (innerDimension * 2)) {
            innerDimension = innerDimension - 1;
            oldPosition = numberPosition;
        }

        getNextDirection();
        setNextPosition();

        fillMatrix();

        return;

    }


    setNextPosition();

    fillMatrix();

}

function setNextPosition() {

    if (direction == 'right') {
        y = y + 1;
    }

    if (direction == 'down') {
        x = x + 1;
    }

    if (direction == 'left') {
        y = y - 1;
    }

    if (direction == 'top') {
        x = x - 1;
    }

}

function getNextDirection() {

    if (direction === 'right') {
        direction = 'down';
        return;
    }

    if (direction === 'down'){
        direction = 'left';
        return;
    }

    if (direction === 'left') {
        direction =  'top';
        return;
    }

    if (direction === 'top') {
        direction = 'right';
    }

}

function createMatrix(m, n) {
    if(numbers[numbers.length-1]<m*n){
    for(count =  numbers[numbers.length-1];count<m*n;count++){
        numbers.push(count);
    }}
    var matrix = [];
    for (var i = 0; i < m ; i++){
        	matrix[i] = [];
        for (var j = 0; j < n ; j++){
                matrix[i][j] = 0;
        }}
    return matrix;
}