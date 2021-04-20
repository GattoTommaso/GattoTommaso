function conferma(){
    var Cognome="", Nome="", Data="", Cittadinanza="", Via="", Stato_civile="", Professione="", Sesso="", Occhi="", Residenza=""; 
    var scelta;
    
    //prendo i dati e li salvo nelle variabili
    Cognome=document.getElementById("Cognome").value;
    Nome=document.getElementById("Nome").value;
    Data=document.getElementById("Data").value;
    Cittadinanza=document.getElementById("Cittadinanza").value;
    Via=document.getElementById("Via").value;
    Stato_civile=document.getElementById("Stato_civile").value;
    Professione=document.getElementById("Professione").value;

    scelta = document.getElementById("Sesso").selectedIndex;
    switch(scelta){
        case 0:
            Sesso="Maschio";
            break;
        case 1:
            Sesso="Femmina";
            break;
    }

    scelta = document.getElementById("Occhi").selectedIndex;
    switch(scelta){
        case 0:
            Occhi="Neri";
            break;
        case 1:
            Occhi="Castani";
            break;
        case 2:
            Occhi="Marrone chiaro";
            break;
        case 3:
            Occhi="Ambra";
            break;
        case 4:
            Occhi="Verdi";
            break;
        case 5:
            Occhi="Azzurri";
            break;
        case 6:
            Occhi="Rossi";
            break;
        case 7:
            Occhi="Viola";
            break;
    }

    scelta = document.getElementById("Provincia").selectedIndex;
    switch(scelta){
        case 0:
            Residenza="Ancona";
            break;
        case 1:
            Residenza="Bari";
            break;
        case 2:
            Residenza="Bologna";
            break;
        case 3:
            Residenza="Cagliari";
            break;
        case 4:
            Residenza="Como";
            break;
        case 5:
            Residenza="Firenze";
            break;
        case 6:
            Residenza="Lecco";
            break;
        case 7:
            Residenza="Napoli";
            break;
    }

    //controllo che i campi obbligatori siano stati compilati
    if((Cognome=="")||(Nome=="")||(Data=="")||(Cittadinanza=="")||(Via=="")||(Stato_civile=="")||(Professione=="")||(Sesso=="")||(Occhi=="")||(Residenza=="")){
        alert("Attenzione, uno dei campi obbligatori non è stato compilato. Si prega di completare correttamente i dati prima di continuare");
    }
    else{
        alert("Offerta attivata");
    }
}