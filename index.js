const p1Str = document.getElementById("player1Box")
const p2Str = document.getElementById("player2Box")
const p1Submit = document.getElementById("p1Submit")
const p2Submit = document.getElementById("p2Submit")
let p1Entry = document.getElementById("player1DisplayBox")
let p2Entry = document.getElementById("player2DisplayBox")
// console.log(p1Name)
// console.log(p2Name)



// function userName1() {
//     let usInput = p1Entry.value;
//     console.log(usInput);
// }
// function userName2() {
//     let us2Input = p2Entry.value;
//     console.log(us2Input)
// }
function userName1(name){
    document.getElementById("player1DisplayBox").innerText = name.value;
}
function userName2(name){
    document.getElementById("player2DisplayBox").innerText = name.value;
}

// let p1NameBox = document.getElementById("player1DisplayBox")
// let p2NameBox = document.getElementById("player2DisplayBox")

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

// show symbol upon click of box 
let count = 1;
function fill(selectedElement){
    if (count <= 9){
      if (count % 2 == 1){
      document.getElementById(selectedElement.id).innerHTML = "X";
    } else {
      document.getElementById(selectedElement.id).innerHTML = "O";
      document.getElementById(selectedElement.id).style.color = "crimson"; 
    }
  count++;
  if (count % 2 == 1 && checkWinner()){
    alert(" is the winner!");
  } else if (count % 2 != 1 && checkWinner()) {
    alert(" is the winner!");
  }
  } else {
    alert("No Winner... try again!");
  }
}    
// with board initialized, player X(1) will take the first turn.


//button to restart game, wipes board and resets player names(?).

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    document.getElementsByClassName("entryBox").innerHTML = "";
    window.location.reload();
});
let playerXTurn = true;




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


    