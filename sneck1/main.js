//chiedi all'utente un numero
let n = Number(prompt("Inserisci un mumero"));

let i = 0;
let r = 0;

//genera N array tanti quanti ne ha chiesti l'utente
while (i < n){

    let arr = [];
    //ciascun array avrà 10 elementi random al suo interno
    for(let r=0; r < 10; r++){
        let randomNumber = Math.floor(Math.random() * 100);
        arr.push = randomNumber;
    }

    console.log(arr);

    i++;
}