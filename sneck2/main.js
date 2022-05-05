const number = [1, 5, 4, 6, 9, 19, 20];

let i = 0;

while(i<number.length){

let nred = document.getElementById("number__red");
let ngreen = document.getElementById("number__green");

    if(number[i] % 2==0){
        console.log(number[i]);
        nred.innerText = number[i];
    }
    else {
        console.log(number[i]);
        ngreen.innerText = number[i];
    }
    i++
}