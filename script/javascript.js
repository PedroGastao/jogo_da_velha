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
        if(this.childNodes.length == 0){
            let cloneJogada = jogada.cloneNode(true)

            this.appendChild(cloneJogada)
    
            if(player1 == player2){
                player1++
            }else{
                player2++
            } 
            checandoVencedor()
        }
    })
}


function checandoVencedor(){
    let box1 = document.getElementById("bloco-1")
    let box2 = document.getElementById("bloco-2")
    let box3 = document.getElementById("bloco-3")
    let box4 = document.getElementById("bloco-4")
    let box5 = document.getElementById("bloco-5")
    let box6 = document.getElementById("bloco-6")
    let box7 = document.getElementById("bloco-7")
    let box8 = document.getElementById("bloco-8")
    let box9 = document.getElementById("bloco-9")

   /* if(box1.childNodes.length>0 && box2.childNodes.length>0 && box3.childNodes.length>0 ){
        let child1 = box1.childNodes[0].className
        let child2 = box2.childNodes[0].className
        let child3 = box3.childNodes[0].className
        
        if(child1 == "x" && child2 == "x" && child3 == "x"){
            console.log("X venceu")
        }else if(child1 == "o" && child2 == "o" && child3 == "o"){
            console.log("o venceu")
        }
    } */    
   
   
   
     function checando(b1,b2,b3){
        if(b1.childNodes.length>0 && b2.childNodes.length>0 && b3.childNodes.length>0 ){
            let child1 = b1.childNodes[0].className
            let child2 = b2.childNodes[0].className
            let child3 = b3.childNodes[0].className
            
            if(child1 == "x" && child2 == "x" && child3 == "x"){
                return console.log("X venceu")
            }else if(child1 == "o" && child2 == "o" && child3 == "o"){
                return console.log("o venceu")
            }
        }

    }

    checando(box1,box2,box3) 
    checando(box4,box5,box6)
}