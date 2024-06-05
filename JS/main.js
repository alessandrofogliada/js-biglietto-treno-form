
// chiedere all’utente nome , il numero di chilometri che vuole percorrere e l'età
const mioInput = document.querySelector(".mioInput");

console.log(mioInput);


const mioButton = document.querySelector("invio");

console.log(mioButton);

mioButton.addEventListener("click", 
    function() {
        let inputValue = info.value;
        console.log(inputValue)

    }
);

// gestione bottonoe











// const costoTrasporto = (0.21);

// let risultato = kmDaPercorrere * costoTrasporto;

// console.log("Il costo è di:" , risultato , "€");

// // va applicato uno sconto del 20% per i minorenni

// const scontoBimbo = ((risultato * 20 ) / 100);

// // va applicato uno sconto del 40% per gli over 65.

// const scontoAnziano = ((risultato * 40 ) / 100);


// if (etaPasseggero <= 17) {
//     risultato = (risultato - scontoBimbo).toFixed(2);
//     console.log("costo biglietto bimbo" , risultato ,"€");
// } else if (etaPasseggero >= 65) {
//     risultato = (risultato - scontoAnziano).toFixed(2);
//     console.log("costo biglietto anziano" , risultato ,"€");
// } 

// document.getElementById('mio_id').innerHTML = "Il costo del biglietto è di :" + risultato ;

