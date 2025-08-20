let count = 1;
let btn1 = document.querySelector('#box1');
btn1.addEventListener('click', function () {
    if (btn1.innerHTML === "X" || btn1.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn1.classList.remove('o', 'x');
        btn1.innerHTML = "X";
        btn1.classList.add("x");

        count++;
    } else {
        btn1.classList.remove('o', 'x');
        btn1.classList.add("o");
        btn1.innerHTML = "O";
        count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)

        }
        else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
      setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn2 = document.querySelector('#box2');
btn2.addEventListener('click', function () {
    if (btn2.innerHTML === "X" || btn2.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn2.classList.remove('o', 'x');
        btn2.innerHTML = "X";
         btn2.classList.add("x");
        count++;
       

    } else {
        btn2.classList.remove('o', 'x');
        btn2.innerHTML = "O";
        btn2.classList.add("o");
        count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
        else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        } setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn3 = document.querySelector('#box3');
btn3.addEventListener('click', function () {
    if (btn3.innerHTML === "X" || btn3.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn3.classList.remove('o', 'x');
        btn3.innerHTML = "X";
        btn3.classList.add("x");
        count++;
    } else {
        btn3.classList.remove('o', 'x');
        btn3.classList.add("o");
        btn3.innerHTML = "O";
        count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
     setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn4 = document.querySelector('#box4');
btn4.addEventListener('click', function () {
    if (btn4.innerHTML === "X" || btn4.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn4.classList.remove('o', 'x');
        btn4.innerHTML = "X";
        btn4.classList.add("x");
        count++;
    } else {
        btn4.classList.remove('o', 'x');
        btn4.classList.add("o");
        btn4.innerHTML = "O"; count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
      setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn5 = document.querySelector('#box5');
btn5.addEventListener('click', function () {
    if (btn5.innerHTML === "X" || btn5.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn5.classList.remove('o', 'x');
        btn5.innerHTML = "X";
        btn5.classList.add("x");

        count++;
    } else {
        btn5.classList.remove('o', 'x');
        btn5.classList.add("o");
        btn5.innerHTML = "O";
        count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") { count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
        }
    setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn6 = document.querySelector('#box6');
btn6.addEventListener('click', function () {
    if (btn6.innerHTML === "X" || btn6.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn6.classList.remove('o', 'x');
        btn6.innerHTML = "X";
        btn6.classList.add("x");

        count++;
    } else {
        btn6.classList.remove('o', 'x');
        btn6.classList.add("o");
        btn6.innerHTML = "O"; count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
    setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn7 = document.querySelector('#box7');
btn7.addEventListener('click', function () {
    if (btn7.innerHTML === "X" || btn7.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn7.classList.remove('o', 'x');
        btn7.innerHTML = "X";
        btn7.classList.add("x");

        count++;
    } else {
        btn7.classList.remove('o', 'x');
        btn7.classList.add("o");
        btn7.innerHTML = "O"; count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) { count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)
        }
   setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn8 = document.querySelector('#box8');
btn8.addEventListener('click', function () {
    if (btn8.innerHTML === "X" || btn8.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn8.classList.remove('o', 'x');
        btn8.innerHTML = "X";
        btn8.classList.add("x");
        count++;
    } else {
        btn8.classList.remove('o', 'x');
        btn8.innerHTML = "O";
        btn8.classList.add("o");
        count++;
    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) { count = 1;
            setTimeout(() => {
                alert("O wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {   count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
             
            }, 500)
        }
    setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
    });
});
let btn9 = document.querySelector('#box9');
btn9.addEventListener('click', function () {
    if (btn9.innerHTML === "X" || btn9.innerHTML === "O") {
        console.log("Already Occupied");
    }
    else if (count % 2 === 0) {
        btn9.classList.remove('o', 'x');
        btn9.innerHTML = "X";
        
        btn9.classList.add("x");
        count++;
    } else {
        btn9.classList.remove('o', 'x');
        btn9.innerHTML = "O";
        btn9.classList.add("o");
        count++;

    }
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let wins = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Col 1
        [1, 4, 7], // Col 2
        [2, 5, 8], // Col 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    wins.forEach(pattern => {
        if (
            buttons[pattern[0]].innerHTML === "O" &&
            buttons[pattern[1]].innerHTML === "O" &&
            buttons[pattern[2]].innerHTML === "O"
        ) {count = 1;
            setTimeout(() => {
                alert("O wins the game");
                
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
            }, 500)

        } else if (buttons[pattern[0]].innerHTML === "X" &&
            buttons[pattern[1]].innerHTML === "X" &&
            buttons[pattern[2]].innerHTML === "X") {count = 1;
            setTimeout(() => {
                alert("X wins the game");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
                
                
            }, 500)
        }
        setTimeout(()=>{
             if(count===10){ count = 1;
    setTimeout(() => {
                alert("Game has drawn");
                btn1.innerHTML = "";
                btn2.innerHTML = "";
                btn3.innerHTML = "";
                btn4.innerHTML = "";
                btn5.innerHTML = "";
                btn6.innerHTML = "";
                btn7.innerHTML = "";
                btn8.innerHTML = "";
                btn9.innerHTML = "";
               
            }, 500)
}
        },500)
       
    });
});

