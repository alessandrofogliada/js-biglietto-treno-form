// definisco costo al km , 0,21€ per km

const costoTrasporto = (0.21);


// chiedo al cliente nome e cognome

let datiCliente = document.querySelector(".myinput");


// chiedi quanti km deve percorrere

let kmDaPercorrere = document.querySelector(".distanzadapercorrere")

// assegno valore ai km che deve percorrere il cliente

let kmCliente = kmDaPercorrere.value

// chiedi età

let etaCliente = document.querySelector(".età")

// assegno valore ad età cliente

let ageClient = etaCliente.value

// creo una variabile per collegare il mio pulsante per confermare 

const mioButton = document.querySelector(".invio");


// gestione interazione pulsante

mioButton.addEventListener("click" ,
    function(){
        let inputValue = datiCliente.value;
        console.log(inputValue);
    }

);

mioButton.addEventListener("click" ,
    function(){
        let inputValue2 = kmDaPercorrere.value;
        console.log(inputValue2);
    }

);

mioButton.addEventListener("click" ,
    function(){
        let inputValue3 = etaCliente.value;
        console.log(inputValue3);
    }

);

// calcolare il prezzo totale del viaggio, secondo queste regole:il prezzo del biglietto è definito in base ai km (0.21 € al km)

let risultato = kmCliente * costoTrasporto;

console.log("Il costo è di:" , risultato , "€");

document.getElementById('prezzobiglietto').innerHTML = "Il costo del biglietto è di :" + risultato ;

// va applicato uno sconto del 20% per i minorenni

const scontoBimbo = ((risultato * 20 ) / 100);

// va applicato uno sconto del 40% per gli over 65.

const scontoAnziano = ((risultato * 40 ) / 100);

// applico sconto ai minorenni ed agli anziani

if (ageClient <= 17) {
    let prezzoBimbo = (risultato - scontoBimbo).toFixed(2);
    console.log("costo biglietto bimbo" , prezzoBimbo ,"€");
} else if (ageClient >= 65 ){
    let prezzoAnziano = (risultato - scontoAnziano).toFixed(2);
    console.log("costo biglietto anziano" , prezzoAnziano ,"€");
} else{
    console.log("costo biglietto adulto" , (risultato.toFixed(2)) , "€");
}