// Creo array per numeri casuali
let randomNum = [];
// Creo ciclo flor per generare numero random 
let i = 0;
while(i < 5) {
    const n = Math.floor(Math.random() * (100 - 1) + 1);
    if(!randomNum.includes(n)){
        randomNum.push(n);
    }
    i++;
}
// Ivio a schermo i numeri all'interno dell'array con alert
alert(randomNum);
// Creo array con in numeri ineriti dall'utente
let userNum = [];
// Dichiaro variabile con valore 1
let num = 1;
//Utilizzo setInterval per inviare ogni 30 secondi prompt
setInterval(function(){
    while(num < 6) {
        const n = parseInt(prompt('iscerisci il ' + num + '° numero'));
        userNum.push(n);
        num++;
    }   
}, 3000) ;


setTimeout(function(){
    const risultato = compare(randomNum, userNum);
    console.log(randomNum)
    console.log(userNum)
    console.log(risultato)
    console.log(points)
}, 17000)

let points = 0

function compare (array1, array2){
    let i = 0;
    let correctNumb = [];
    let length = array1.length;
    
    while(i < length) {
        let positionArray1 = array1[i];
        let positionArray2 = array2[i];
        if(positionArray1 === positionArray2){
            correctNumb.push(positionArray2);
            points++
        }
        i++;
    }
    return correctNumb
}
