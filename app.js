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

    $(`.${rowClass}`).fadeOut(200).addClass("color-yellow color-black").fadeIn(200);
    setTimeout(function () {
        $(`.${rowClass}`).removeClass("color-yellow");
    }, 600)

    $(`.${columnClass}`).fadeOut(200).addClass("color-yellow color-black").fadeIn(200);
    setTimeout(function () {
        $(`.${columnClass}`).removeClass("color-yellow");
    }, 600)




    //Fibonacci
    const container = $("#container");
    const fibonacci = [];

    for (let i = 0; i < container[0].children.length; i++) {

        fibonacci.push(container[0].children[i].innerHTML); 
    }
    console.log(fibonacci)


    //-------------------------------------------------------------------------

    // // Javascript implementation to count the
    // // consecutive fibonacci pairs in the array
    
    // // Function to find the previous
    // // fibonacci for the number N
    // function previousFibonacci(n)
    // {
    //     var a = n / ((1 + Math.sqrt(5)) / 2.0);
    //     return Math.round(a);
    // }
    
    // // Function to find the next
    // // fibonacci number for the number N
    // function nextFibonacci(n)
    // {
    //     var a = n * (1 + Math.sqrt(5)) / 2.0;
    //     return Math.round(a);
    // }
    
    // // Function to check that a Number
    // // is a perfect square or not
    // function isPerfectSquare(x)
    // {
    //     var s = Math.sqrt(x);
    //     return (s * s == x);
    // }
    
    // // Function to check that a number
    // // is fibonacci number or not
    // function isFibonacci(n)
    // {
    //     // N is Fibonacci if one of
    //     // (5*n*n + 4) or (5*n*n - 4)
    //     // is a perfect square
    //     return (isPerfectSquare(5 * n * n + 4)
    //             || isPerfectSquare(5 * n * n - 4));
    // }
    
    // // Function to count the fibonacci
    // // pairs in the array
    // function countFibonacciPairs(arr, n)
    // {
    //     var res = 0;
    
    //     // Loop to iterate over the array
    //     // to choose all pairs of the array
    //     for (var i = 0; i < n; i++)
    //         for (var j = i + 1; j < n; j++)
    
    //             // Condition to check if both
    //             // the number of pair is a
    //             // fibonacci number
    //             if (isFibonacci(arr[i])
    //                 && isFibonacci(arr[j])) {
    
    //                 var prevFib = previousFibonacci(arr[i]);
    //                 var nextFib = nextFibonacci(arr[i]);
    
    //                 // Condition to check if both
    //                 // the number form consecutive
    //                 // fibonacci numbers
    //                 if (prevFib == arr[j]
    //                     || nextFib == arr[j]) {
    //                     res++;
    //                 }
    //             }
    
    //     return res;
    // }
    
    // // Driver Code
    // var a = fibonacci;
    // var n = a.length;
    // // document.write(countFibonacciPairs(a, n));
    // $(`h1`).html(`${countFibonacciPairs(a, n)}`);

});