//variabili globali
let grid = document.getElementById("grid");
let btn = document.getElementById("btn");
let select = document.getElementById("select");
let reset = document.getElementById("reset");
let arrayNum = [];
let arrayBomb = [];
let numeroCelle;

//funzione al click per resettare
reset.addEventListener("click",
function startGame(){
    grid.innerHTML = ""
}
)

//inizio gioco
btn.addEventListener("click",
function(){
    //condizione per determinare la difficoltà scelta dall'utente
    if (select.value == "facile"){
    numeroCelle = 100;
    } else if ( select.value == "medio"){
    numeroCelle = 81;
    } else {
    numeroCelle = 49;
    }
            
    
    //array di numeri
    for(y=0; y <= numeroCelle; y++){
    arrayNum.push(y)   
    }
    arrayNum.sort(() => (Math.random() > .5) ? 1 : -1);
    //array di bombe
    while (arrayBomb.length < 16) {
        const randomNumber = Math.floor(Math.random() *16);
        // se il numero non è incluso viene pushato
        if (!arrayBomb.includes(randomNumber)) {
            arrayBomb.push(randomNumber);
        }
    }
    console.log(arrayBomb)


    for (let i = 1; i <= numeroCelle; i++){
        let content = document.createElement("div");

        if(numeroCelle == 100){
            content.classList.add("boxEasy")
        } else if(numeroCelle == 81){
            content.classList.add("boxMedium")
        } else if(numeroCelle == 49){
            content.classList.add("boxHard")
        }   
            grid.appendChild(content);
            content.innerHTML = arrayNum[i];

            //funzione per colorare il box al click
            content.addEventListener("click",
                /*function colorOnClick(){ 
                const clickedNumber = parseInt(this.innerText);
                if (arrayBomb.includes(clickedNumber)){
                    this.classList.add("bgRed")
                    myFunc()
                } else{
                    this.classList.add("bgLightBlue")
                } 
                
            }*/
            myFunc)
    }
}
)


//FUNZIONI

const myFunc =  function (){
    const clickedNumber = parseInt(this.innerText);
    if (arrayBomb.includes(clickedNumber)){
        this.classList.add("bgRed")
        content.removeEventListener("click", myFunc)
    } else{
        this.classList.add("bgLightBlue")
    }
}
  
