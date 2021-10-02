const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// CRIANDO O JOGADOR PLAYER
let main = document.getElementById("mainContent")

let player = document.createElement("div")
player.classList.add("stylePlayer")
player.id = "player"

// CRIAR ESTRUTURA COM DOM
for(let i = 0; i < map.length; i++){
    let row = document.createElement("div")
    row.classList.add("styleRow")  
    elementMap = map[i]

    for(let j = 0; j < elementMap.length; j++){
        let cell = document.createElement("div")
        cell.classList.add("styleCell")
        let elementCell = elementMap[j]

        cell.dataset.line = i;
        cell.dataset.col = j;

        if(elementCell === "W"){
            cell.classList.add("wall")
        }
        else if(elementCell === " "){
            cell.classList.add("startEnd")
        }
        else if(elementCell === "S"){
            cell.classList.add("startEnd")
            cell.id = "start"
            cell.appendChild(player)
        }
        else if(elementCell === "F"){
            cell.id = "end"
            cell.classList.add("startEnd")
        }
        cell.append(elementCell)
        row.appendChild(cell)
    }
    main.appendChild(row)
}

// GERANDO MOVIMENTO

document.addEventListener('keydown', (event) => {

    const keyPressed = event.key
    let currentLine = Number(player.parentElement.getAttribute('data-line'))
    let currentCol = Number(player.parentElement.getAttribute('data-col'))
    let nextDiv

    if(keyPressed === "ArrowUp"){
        nextDiv = main.children[currentLine -1].children[currentCol]
        if(nextDiv.classList.contains("startEnd")){
            nextDiv.appendChild(player)
        }
    }
    else if(keyPressed === "ArrowDown"){
        nextDiv = main.children[currentLine + 1].children[currentCol];
        if(nextDiv.classList.contains("startEnd")){
            nextDiv.appendChild(player)
        }
    }
    if(keyPressed === "ArrowLeft"){
        nextDiv = main.children[currentLine].children[currentCol - 1]
        if(nextDiv.classList.contains("startEnd")){
            nextDiv.appendChild(player)
        }
    }
    else if(keyPressed === "ArrowRight"){
        nextDiv = main.children[currentLine].children[currentCol + 1];
        if(nextDiv.classList.contains("startEnd")){
            nextDiv.appendChild(player)
        }
        finalGame(nextDiv);    
    }
    
})


const sucess = document.getElementById("finalDiv")
function finalGame(div){
    if(div.id === "end"){
        sucess.classList.replace("hidden","finalLine")
    }
}

const resetBtn = document.getElementById("resetBtn")
function reset(){
    const start = document.getElementById("start")
    start.appendChild(player)
    sucess.classList.replace("finalLine","hidden")
}
resetBtn.addEventListener("click", reset)

let audio = document.getElementById("music");
audio.volume = 0.04;

