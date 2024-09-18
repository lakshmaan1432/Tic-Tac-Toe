let turn = "X"

button1 = document.getElementById(1)
button2 = document.getElementById(2)
button3 = document.getElementById(3)
button4 = document.getElementById(4)
button5 = document.getElementById(5)
button6 = document.getElementById(6)
button7 = document.getElementById(7)
button8 = document.getElementById(8)
button9 = document.getElementById(9)

function checkWinner(player){
    if ( button1.innerText == button2.innerText && button2.innerText == button3.innerText && button3.innerText == player) return true;

    if ( button4.innerText == button5.innerText && button5.innerText == button6.innerText && button6.innerText == player) return true;

    if ( button7.innerText == button8.innerText && button8.innerText == button9.innerText && button9.innerText == player) return true;

    if ( button1.innerText == button4.innerText && button4.innerText == button7.innerText && button7.innerText == player) return true;

    if ( button2.innerText == button5.innerText && button5.innerText == button8.innerText && button8.innerText == player) return true;

    if ( button3.innerText == button6.innerText && button6.innerText == button9.innerText && button9.innerText == player) return true;

    if ( button1.innerText == button5.innerText && button5.innerText == button9.innerText && button9.innerText == player) return true;

    if ( button3.innerText == button5.innerText && button5.innerText == button7.innerText && button7.innerText == player) return true;

    return false;
}

function swapTurn(){
    if ( turn == "X"){
        turn = "O";
    }
    else{
        turn = "X";
    }
}

function play(id){
    let buttonClicked = document.getElementById(id);
    if( buttonClicked.innerText == "")
    buttonClicked.innerText = turn;
    if (checkWinner(turn)){
        document.getElementById("result").innerText = turn + " wins the game broo"
    }
    swapTurn()
   
}

function restart(){
    button1.innerText = ""
    button2.innerText = ""
    button3.innerText = ""
    button4.innerText = ""
    button5.innerText = ""
    button6.innerText = ""
    button7.innerText = ""
    button8.innerText = ""
    button9.innerText = ""

}