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
        let jogada = ChecandoJogador(player1,player2)
       
        if(this.childNodes.length == 0){
            let cloneJogada = jogada.cloneNode(true)

            this.appendChild(cloneJogada)
            
            //computando jogada
            if(player1 == player2){
                player1++

                if(segundoJogador == "IA-players"){

                    JogadaIA()
                    player2++
                }
            }else{
                player2++
            } 
            checandoVencedor()
        }
    })
}
//evento de click para o butao
for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        segundoJogador = this.getAttribute("id") 
        
        for(let j=0; j< buttons.length;j++){
            buttons[j].style.display = "none"
        }

        setTimeout(function(){
            let container = document.querySelector("#container-jogo")
            container.classList.remove("hide")
        },500)
    })
}

function ChecandoJogador(player1,player2){
    if(player1 == player2){
        return jogada = x
    }else{
        return jogada= o
    }
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
                DeclarandoVencedor("x")
            }else if(child1 == "o" && child2 == "o" && child3 == "o"){
                DeclarandoVencedor("o")
            }
        }

    }
    
    checando(box1,box2,box3) 
    checando(box4,box5,box6)
    checando(box7,box8,box9)
    checando(box1,box4,box7)
    checando(box2,box5,box8)
    checando(box3,box6,box9)
    checando(box1,box5,box9)
    checando(box3,box5,box7)

    let contador = 0
    for(let i=0; i< boxes.length; i++){
        if(boxes[i].childNodes[0] !=undefined ){
            contador++
        }
    }
    if(contador == 9){
        DeclarandoVencedor("Deu velha")
    }


}

function DeclarandoVencedor(vencedor){
    let placarx = document.querySelector("#scoreboard-1")
    let placaro = document.querySelector("#scoreboard-2")   
    let msg = ""
    if(vencedor == "x"){
        placarx.textContent = parseInt(placarx.textContent)+1
        msg = "O JOGADOR 1 VENCEU"
    }else if(vencedor == "o"){
        placaro.textContent = parseInt(placaro.textContent)+1
        msg = "O JOGADOR 2 VENCEU"
    }else{
        msg = "DEU EMPATE!"
    }

    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")

    setTimeout(function(){
        messageContainer.classList.add("hide")
    },3000)

    player1 = 0
    player2 = 0

    let boxRemove = document.querySelectorAll(".box div")

    for(let i=0; i< boxRemove.length;i++){
        boxRemove[i].parentNode.removeChild(boxRemove[i])
    }
}

function JogadaIA(){
    let cloneO = o.cloneNode(true)
    contador = 0
    fiilled = 0

    for(let i=0; i< boxes.length; i++){
        let randomNumber = Math.floor(Math.random() *5)

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <=1){
                boxes[i].appendChild(cloneO)
                contador++
                break
            }
        }else{
            fiilled++
        }
    }
    if(contador == 0 && fiilled<9){
        JogadaIA()
    }
}