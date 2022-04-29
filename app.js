const size = 50; // size = rows * columns
const x = 0; //start value
let y = 0; //for id

for (let rows = 0; rows < size; rows++) {
    for (let columns = 0; columns < size; columns++) { 
        
        y++;
        $("#container").append(`<div id="${y}" class="grid row${rows + 1} column${columns + 1}">${x}</div>`);
    };
};
$(".grid").width(1100/size);
$(".grid").height(1100/size);

//after click
$(document).click(function (e) { 

    const squareId = e.target.id; //select id of clicked square
    const idInRow = Math.ceil(squareId / size) //number of row where is ID
    let idInColumn = squareId % size //number of column where is ID

    //fixing bugs =======================================================================
    if (idInColumn == 0) { //bug with last column bc modulo
        idInColumn = size
    }

    const squareValue = Number(e.target.innerHTML); //decreasing value of clicked square
    $(`#${squareId}`).html(`${squareValue - 1}`);   //bc clciked square = column and row

    for (let i = 0; i < size; i++) {    // increasing value of clicked square diagonale
        const bug = 51;                 // bc no idea
        if (squareId == 1 || squareId == 1 + 51 * i) {
            $(`#${squareId}`).html(`${squareValue }`);
        } 
    }
    //===================================================================================


    //increasing value of column and row by 1
    for (let i = 0; i < size; i++) {
        const index = i * size;

        const columnId = $(`#${idInColumn + index}`);
        const columnIdValue = Number(columnId[0].innerHTML);

        const rowId = $(`#${((idInRow * size) - size + 1) + i}`);
        const rowIdValue = Number(rowId[0].innerHTML); 
        
        $(`#${idInColumn + index}`).html(`${columnIdValue+1}`);
        $(`#${((idInRow * size) - size + 1) + i}`).html(`${rowIdValue+1}`);
    }
    
    //taking class of row and column for changing color after value is raised
    const rowClass = e.target.classList[1];
    const columnClass = e.target.classList[2];

    $(`.${rowClass}`).fadeOut(150).addClass("color-yellow color-black").fadeIn(150);
    setTimeout(function () {
        $(`.${rowClass}`).removeClass("color-yellow");
    }, 500)

    $(`.${columnClass}`).fadeOut(150).addClass("color-yellow color-black").fadeIn(150);
    setTimeout(function () {
        $(`.${columnClass}`).removeClass("color-yellow");
    }, 500)


    //Fibonacci
    const container = $("#container");
    
        //loking for sequence in ROW -------------------------------------------------------
        let nextRow = 0

        for (let rows = 0; rows < size; rows++) {  //loop for every row

            const rowArray = [];

            for (let columns = 0; columns < size; columns++) {  //loop for every cell in row
                
                rowArray.push(container[0].children[nextRow + columns].innerHTML); 
            };

            for (let i = 0; i < rowArray.length; i++) {
                if (
                    rowArray[i] != 0 &&
                    rowArray[i + 2] - rowArray[i + 1] == rowArray[i] &&
                    rowArray[i + 3] - rowArray[i + 2] == rowArray[i + 1] &&
                    rowArray[i + 4] - rowArray[i + 3] == rowArray[i + 2]  
                ) {
                    for (let index = 0; index < 5; index++) { //vanish 5 consecutive numbers in the Fibonacci sequence

                        const idOfCell = container[0].children[nextRow + i + index].id;
                    
                        setTimeout(function () {
                            $(`#${idOfCell}`).fadeOut(150).addClass("color-green").fadeIn(150);
                            
                            setTimeout(function () {
                                $(`#${idOfCell}`).removeClass("color-black color-green").html(`${x}`);
                            }, 600)

                        }, 600)
                    }
                }
            }
            nextRow = nextRow + size;
        };


        //loking for sequence in Column-------------------------------------------------------
        let nextColumn = 0

        for (let column = 0; column < size; column++) {  //loop for every column

            const columnArray = [];

            for (let row = 0; row < size; row++) {  //loop for every cell in column
                
                columnArray.push(container[0].children[row + ((row * size) - row) + nextColumn].innerHTML); 
            };

            for (let i = 0; i < columnArray.length; i++) {
                if (
                    columnArray[i] != 0 &&
                    columnArray[i + 2] - columnArray[i + 1] == columnArray[i] &&
                    columnArray[i + 3] - columnArray[i + 2] == columnArray[i + 1] &&
                    columnArray[i + 4] - columnArray[i + 3] == columnArray[i + 2]  
                ) {
                    for (let index = 0; index < 5; index++) { //vanish 5 consecutive numbers in the Fibonacci sequence

                        const idOfCell = container[0].children[i + ((i * size) - i) + nextColumn + (index * size)].id;
                                        
                        setTimeout(function () {
                            $(`#${idOfCell}`).fadeOut(150).addClass("color-green").fadeIn(150);
                            
                            setTimeout(function () {
                                $(`#${idOfCell}`).removeClass("color-black color-green").html(`${x}`);
                            }, 600)
                        }, 600)
                    }
                }
            }

            nextColumn = nextColumn + 1;
        };
});