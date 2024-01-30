// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
//  La risposta finale (o output) sarà anch’essa da scrivere in console.


// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca.


// const age = Number( prompt("quanti anni hai?"));





const ButtonElement = document.querySelector("#create");
ButtonElement.addEventListener(`click`,
    function () {

        const nameElement = document.querySelector("#user-Name");
        const kmElement = document.querySelector("#distance");
        const AgeElement = document.getElementById("age").value;


        
        const costPromile = 0.21;
        
        let sum = kmElement.value * costPromile;

        

        const DiscountAge1 = 18;

        const DiscountAge2 = 64;

        if (AgeElement < DiscountAge1) {
            sum = sum - (sum * 20 / 100);


        }


        if (AgeElement > DiscountAge2) {
            sum = sum - (sum * 40 / 100);
        }

        
        
        

        document.getElementById("output").innerHTML = `Il costo del Biglietto è ${sum}`;

        
    }

)







// const km = Number ( prompt("indica la distanza in kilometri"));

// let sum = km * costPromile;




// Sconti 



// document.getElementById("distance").innerHTML = `La distanza selezionata è ${km} `;

// document.getElementById("age").innerHTML = `La tua età è ${age} `;



// 
// Ristrutturazione del Codice 
// 


