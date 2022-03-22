//variabili globali
let grid = document.getElementById("grid");
let btn = document.getElementById("btn");
let select = document.getElementById("select");
let reset = document.getElementById("reset");
let arrayNum = [];
let numeroCelle;

//funzione al click per resettare
reset.addEventListener("click",
function(){
    grid.innerHTML = ""
}
)

// ciclo per generare numeri random nell'array

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
            content.innerHTML = i;

            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
    }
    //condizioni per determinare la difficoltà scelta dall'utente
     /* if(select.value == "facile"){
        for(let i = 1; i <= 100; i++){
            let content = document.createElement("div");
            content.classList.add("boxEasy");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    } else if(select.value == "medio"){
        for(let i = 1; i <= 81; i++){
            let content = document.createElement("div");
            content.classList.add("boxMedium");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    } else if(select.value == "difficile"){
        for(let i = 1; i <= 100; i++){
            let content = document.createElement("div");
            content.classList.add("boxHard");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    } */
}
)
