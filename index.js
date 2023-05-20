const winningConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8], 
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]  
]

let board = document.getElementsByClassName("entryBox")
let boardArray = Array.from(board)
let count = 1;
let randomComp = Math.floor(Math.random() * 9)
let displayBox = document.getElementById("infoText")



const userInput = document.getElementById("player1Box").value
const userInput2 = document.getElementById("player2Box").value
let turnDisplay = document.getElementById("infoText")

function nameSubmit () {
  let userInput = document.getElementById("player1Box").value
  document.getElementById('player1DisplayBox').innerHTML = userInput;
  userInput = localStorage.setItem('userInput', userInput)
}
function nameSubmit2 () {
  let userInput2 = document.getElementById("player2Box").value
  document.getElementById('player2DisplayBox').innerHTML = userInput2;
  userInput2 = localStorage.setItem('userInput2', userInput2)
}


// show symbol upon click of box 
function playerTurn(selectedElement) {
  if (checkWinner()) {
    let userInput = document.getElementById("player1Box").value
      alert(userInput + " won!")
  }
  if (count <= 9 && selectedElement.innerHTML == ""){
      document.getElementById(selectedElement.id).innerHTML = "X"
      selectedElement.style.color = "orange";  
      count++;
      compTurn(); 
  
  return;
  }
}
//game logic for com turn.
//create array of game board from HTMl collection 
//create random number to represent index of array/game board section
//test if box is empty by running the generated number against the matching array box
//if filled, return, generate a new number and try again
//if empty, fill box with "O"


  const compTurn = () => {
    if (checkWinner() && count % 2 == 1){
      alert(userInput + " won!")
      return;
    }
    randomComp = Math.floor(Math.random() * 9)
    if (boardArray[randomComp].textContent == ""){
          boardArray[randomComp].innerHTML = "O";
          boardArray[randomComp].style.color = "crimson"; 
          count++;
          console.log(count)
      }else if (boardArray[randomComp].textContent != ""){
              compTurn();
     } 
  }







// with board initialized, player X(1) will take the first turn.


//button to restart game, wipes board

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    let board = document.getElementsByClassName("entryBox")
    let turnDisplay = document.getElementById("infoText")
    let arr = Array.from(board)
    console.log(arr)
    for (let i = 0; i <= arr.length; i++){
      if (arr[i] == ""){
        return;
      } else if (arr[i] != ""){
        arr[i].innerHTML = "";
        turnDisplay.innerHTML = "New game!"
        count = 1;
        console.log(count)
      }
    } 
   console.log("button is working")
});



// function to test user entries against the winning combinations

function checkWinner(){
    if (document.getElementById("box0").innerHTML != "" && document.getElementById("box1").innerHTML != "" && document.getElementById("box2").innerHTML != "" 
       && document.getElementById("box0").innerHTML == document.getElementById("box1").innerHTML 
       && document.getElementById("box1").innerHTML == document.getElementById("box2").innerHTML ) {
        return true;
      
    }
    if (document.getElementById("box0").innerHTML != "" && document.getElementById("box3").innerHTML != "" && document.getElementById("box6").innerHTML != "" 
       && document.getElementById("box0").innerHTML == document.getElementById("box3").innerHTML 
       && document.getElementById("box3").innerHTML == document.getElementById("box6").innerHTML ) {
        return true;
    }
    if (document.getElementById("box0").innerHTML != "" && document.getElementById("box4").innerHTML != "" && document.getElementById("box8").innerHTML != "" 
       && document.getElementById("box0").innerHTML == document.getElementById("box4").innerHTML 
       && document.getElementById("box4").innerHTML == document.getElementById("box8").innerHTML ) {
        return true;
    }
    if  (document.getElementById("box1").innerHTML != "" && document.getElementById("box4").innerHTML != "" && document.getElementById("box7").innerHTML != "" 
        && document.getElementById("box1").innerHTML == document.getElementById("box4").innerHTML 
        && document.getElementById("box4").innerHTML == document.getElementById("box7").innerHTML ) {
        return true;    
        }
    if (document.getElementById("box2").innerHTML != "" && document.getElementById("box5").innerHTML != "" && document.getElementById("box8").innerHTML != "" 
       && document.getElementById("box2").innerHTML == document.getElementById("box5").innerHTML 
       && document.getElementById("box5").innerHTML == document.getElementById("box8").innerHTML ) {
        return true;    
    }
    if (document.getElementById("box2").innerHTML != "" && document.getElementById("box4").innerHTML != "" && document.getElementById("box6").innerHTML != "" 
        && document.getElementById("box2").innerHTML == document.getElementById("box4").innerHTML 
        && document.getElementById("box4").innerHTML == document.getElementById("box6").innerHTML ) {
        return true;    
        }
    if (document.getElementById("box3").innerHTML != "" && document.getElementById("box4").innerHTML != "" && document.getElementById("box5").innerHTML != "" 
        && document.getElementById("box3").innerHTML == document.getElementById("box4").innerHTML 
        && document.getElementById("box4").innerHTML == document.getElementById("box5").innerHTML ) {
        return true;    
        }
     if(document.getElementById("box6").innerHTML != "" && document.getElementById("box7").innerHTML != "" && document.getElementById("box8").innerHTML != "" 
        && document.getElementById("box6").innerHTML == document.getElementById("box7").innerHTML 
        && document.getElementById("box7").innerHTML == document.getElementById("box8").innerHTML ) {
        return true;    
        }

    }

