let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#menssagem")
let messageText = document.querySelector("#menssagem p")
let segundoJogador

let player1 = 0
let player2 = 0

//evento de click 
for(let i =0;i < boxes.length; i++){
    boxes[i].addEventListener("click", function (){
        let jogada
        if(player1 == player2){
            jogada = x
        }else{
            jogada = o
        }
        let cloneJogada = jogada.cloneNode(true)

        this.appendChild(cloneJogada)
    })
}