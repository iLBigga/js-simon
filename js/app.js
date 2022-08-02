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
        // SE n non è NaN
        if (isNaN(n) === false) {
            // Pusha n in userNum
            userNum.push(n);
            // Incrmeento num
            num++;
        } else {// ALTRIMENTI
            // Alert il 'valore non è valido'
            alert('Il valore inserito non è valido')
        }
        
    }   
}, 3000) ;

// utilizzo setTimeout per poi stampare risultato
setTimeout(function(){
    const risultato = compare(randomNum, userNum);
    // SE il valore di array è undefined
    if (risultato[0] === undefined) {
        // Stampa 'Nessun numero corretto'
        console.log('Nessun numero corretto')
    }else{ // ALTRIMENTI
        // Stampa il punteggio 
        console.log('Il tuo punteggio è di ' + points + ' ed i numeri corretti sono ' + risultato )
    }
}, 3100)


// Creo variabile per il punteggio
let points = 0
// Creo funzione per verificare se il numero è presente in randomNum
function compare (array1, array2){
    let i = 0;
    // Creo array per i numeri corretti
    let correctNumb = [];
    let arrayA = array1;
    let length = array1.length;
    // Creo ciclo while per verificare se il numeoro in userNum è presenti in RandomNum
    while(i < length) {        
        let arrayB = array2[i];
        // Creo variabile che ritorna un valore booleano
        let test = arrayA.includes(arrayB)
        // Se test è true
        if (test) {
            // Pusga il numero in arrayB selezionato in correntNumb
            correctNumb.push(arrayB);
            // Incremento punti
            points++
        }
        // Incremento i
        i++;
    }
    return correctNumb
}
