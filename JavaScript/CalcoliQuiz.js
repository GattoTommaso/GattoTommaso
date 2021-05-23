function calcola(){
    var Cognome="", Nome="", Giorno=0, Mese="", Anno=0; 
    var risposta, scelta;
    var punteggio=0, punteggioUtente;
    
    //prendo i dati e li salvo nelle variabili
    Cognome=document.getElementById("Cognome").value;
    Nome=document.getElementById("Nome").value;
    Giorno=document.getElementById("Giorno").value;
    scelta = document.getElementById("Mese").selectedIndex;

    switch(scelta){
        case 0:
            Mese="Gennaio";
            break;
        case 1:
            Mese="Febbraio";
            break;
        case 2:
            Mese="Marzo";
            break;
        case 3:
            Mese="Aprile";
            break;
        case 4:
            Mese="Maggio";
            break;
        case 5:
            Mese="Giugno";
            break;
        case 6:
            Mese="Luglio";
            break;
        case 7:
            Mese="Agosto";
            break;
        case 8:
            Mese="Settembre";
            break;
        case 9:
            Mese="Ottobre";
            break;
        case 10:
            Mese="Novembre";
            break;
        case 11:
            Mese="Dicembre";
            break;
    }
    Anno=document.getElementById("Anno").value;
    //controllo che i campi obbligatori siano stati compilati
    if((Cognome=="")||(Nome=="")||(Giorno==0)||(Mese=="")||(Anno==0)){
        alert("Attenzione, uno dei campi obbligatori non è stato compilato. Si prega di completare correttamente i dati prima di continuare");
    }
    else{
        //domanda 1  
        risposta=document.getElementById("Risposta1").value;
        if((risposta=="DATA MANIPULATION LANGUAGE") ||(risposta=="DML")){
            punteggio=1;
        }
        else {
            punteggio=0;
        }

        //domanda 2
        scelta = document.getElementById("Risposta2").selectedIndex;
        switch(scelta){
            case 0:
                punteggio+=0;
                break;
            case 1:
                punteggio+=1;
                break;
            case 2:
                punteggio+=0;
                break;
            case 3:
                punteggio+=0;
                break;
        }

        //domanda 3
        if(document.getElementById("Risposta3_1").checked==true){
            punteggio+=1;
        }
        else {
            punteggio+=0;
        }

        //domanda 4
        if(document.getElementById("Risposta4_1").checked==true){
            punteggio+=1;
        }
        if(document.getElementById("Risposta4_2").checked==true){
            punteggio+=0;
        }
        if(document.getElementById("Risposta4_3").checked==true){
            punteggio+=1;
        }

        //domanda 5
        risposta=document.getElementById("Risposta5").value;
        if(risposta=="byte"){
            punteggio+=1;
        }
        else {
            punteggio+=0;
        }

        //risultati Punteggio
        document.getElementById("Punteggio").innerHTML=punteggio;

        //risultati Punteggio Utente
        punteggioUtente= Cognome.slice(0,3);
        punteggioUtente+= Nome.slice(0,3);
        punteggioUtente+= Mese.slice(0,3);
        punteggioUtente+= Anno.slice(0,2);
        punteggioUtente+= " ";
        punteggioUtente+= punteggio*10;
        document.getElementById("PunteggioUtente").innerHTML=punteggioUtente;
    }   
}