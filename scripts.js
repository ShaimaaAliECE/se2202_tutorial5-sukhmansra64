let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayerIndicator = document.getElementById("next-lbl");
nextPlayerIndicator.innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for(i=1; i<=9;i++){
       let tableSection = document.getElementById(`c${i}`);
        let btn = document.createElement("button");
        btn.innerHTML="[ ]";
        tableSection.appendChild(btn);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    event.target.innerHTML=nextPlayer;
    event.target.disabled=true;
    if(nextPlayer==='X'){
        nextPlayer='O'
        nextPlayerIndicator.innerHTML = nextPlayer;
    }
    else if(nextPlayer==='O'){
        nextPlayer='X'
        nextPlayerIndicator.innerHTML = nextPlayer;
    }
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let gameOverDoc = document.getElementById('game-over-lbl');
        let header = document.createElement('h1');
        header.innerHTML = 'Game Over';
        gameOverDoc.appendChild(header);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    checkButtons=true;
    for(i=1; i<=9;i++){
        let tableSection = document.getElementById(`c${i}`);
        let btn = tableSection.firstChild;
        if(!(btn.disabled===true)){
            checkButtons = false;
        }
        
    }
    // This function returns true if all the buttons are disabled and false otherwise 
    if(checkButtons===true){
        return true;
    }
}
