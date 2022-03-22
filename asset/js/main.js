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
    grid.innerHTML = ""
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
        // calcolare il numero massimo dei tentativi
        let massimiTentativi = numeroCelle - arrayBomb.length;
        //contatore quadrati non bombe
        let contatore = [];
        //punteggio utente
        let score = 0;

    for (let i = 1; i <= numeroCelle; i++){
        let content = document.createElement("div");
        if(numeroCelle == 100){
            content.classList.add("boxEasy")
            content.classList.add("boxGeneral")
        } else if(numeroCelle == 81){
            content.classList.add("boxMedium")
            content.classList.add("boxGeneral")
        } else if(numeroCelle == 49){
            content.classList.add("boxHard")
            content.classList.add("boxGeneral")
        }


            grid.appendChild(content);
            content.innerHTML = arrayNum[i];

            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){ 
                const clickedNumber = parseInt(this.innerText);
                if (arrayBomb.includes(clickedNumber)){
                    this.classList.add("bgRed")
                    endGame ("lose")
                } else{
                    score++
                    this.classList.add("bgLightBlue")
                    contatore.push[clickedNumber]
                    this.style.pointerEvents = "none";
                }
                   if(contatore.length >= massimiTentativi) {
                    endGame("win");}                 
            })
            function endGame(vittoriSconfitta) {
                if(vittoriSconfitta === "win") {
                    alert("complimenti hai vinto!")
                } else {     
                    alert(`hai perso! il tuo punteggio è: ${score}`)   
                    // Rendo tutti i quadrati non cliccabili
                    const clickedHistory = document.getElementsByClassName("boxGeneral");
                    for (let i = 0; i < clickedHistory.length; i++) {
                        const clickedBox = clickedHistory[i];
                        clickedBox.style.pointerEvents = "none";
                    }
                }
            }
    }
}
)


  
