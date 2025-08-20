let rock = document.querySelector(".rock")
let mychoice = 0;
let myscore = 0;
let compscore = 0;
let comp = document.querySelector(".comp");
let you = document.querySelector(".you");

rock.addEventListener("click", () => {
    mychoice = 1;
    console.log("Mychoice= " + mychoice);
    let compchoice = 0;
    compchoice = Math.floor(Math.random() * 3) + 1;
    console.log(compchoice);
    if (compchoice === mychoice) {
        alert("It's a Draw");
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
    you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;

}

    else if (compchoice === 2 && mychoice === 1) {
        alert("Computer won! Paper beats Rock.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 2) {
        alert("Computer won! Scissor beats Paper.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 3) {
        alert("Computer won! Rock beats Scissors.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 2) {
        alert("You won! Paper beats Rock." );
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 2 && mychoice === 3) {
        alert("You won! Scissor beats Paper.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 1) {
        alert("You won! Rock beats Scissors.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }

})
let paper = document.querySelector(".paper")
paper.addEventListener("click", () => {
    mychoice = 2;
    console.log("Mychoice= " + mychoice);
    let compchoice = 0;
    compchoice = Math.floor(Math.random() * 3) + 1;
    console.log(compchoice);
    if (compchoice === mychoice) {
        alert("It's a Draw");
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
    you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;

}

    else if (compchoice === 2 && mychoice === 1) {
        alert("Computer won! Paper beats Rock.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 2) {
        alert("Computer won! Scissor beats Paper.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 3) {
        alert("Computer won! Rock beats Scissors.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 2) {
        alert("You won! Paper beats Rock." );
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 2 && mychoice === 3) {
        alert("You won! Scissor beats Paper.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 1) {
        alert("You won! Rock beats Scissors.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }

})
let scissors = document.querySelector(".scissors")
scissors.addEventListener("click", () => {
    mychoice = 3;
    console.log("Mychoice= " + mychoice);
    let compchoice = 0;
    compchoice = Math.floor(Math.random() * 3) + 1;
    console.log(compchoice);
  if (compchoice === mychoice) {
        alert("It's a Draw");
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
    you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;

}

    else if (compchoice === 2 && mychoice === 1) {
        alert("Computer won! Paper beats Rock.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 2) {
        alert("Computer won! Scissor beats Paper.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 3) {
        alert("Computer won! Rock beats Scissors.");
        compscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 1 && mychoice === 2) {
        alert("You won! Paper beats Rock." );
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 2 && mychoice === 3) {
        alert("You won! Scissor beats Paper.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
    else if (compchoice === 3 && mychoice === 1) {
        alert("You won! Rock beats Scissors.");
        myscore++;
        console.log("Computer Score: " + compscore);
        console.log("Your Score " + myscore);
        you.innerHTML= " You: "+ myscore;
        comp.innerHTML= " Comp: "+ compscore;
    }
})
