function calcola(){
    var persone,km;
    var modprezzo,scelta;
    var prezzo;
    
    //prendo i valori e li salvo nelle variabili
    km = document.getElementById("km").value;
    
    if(document.getElementById("r1").checked==true){
        modprezzo=0.43;
    }
    else {
        modprezzo=0.25;
    }
    //a seconda dell'indice imposta il numero di persone
    scelta = document.getElementById("Npersone").selectedIndex;
    switch(scelta){
        case 0:
            persone=1;
            break;
        case 1:
            persone=2;
            break;
        case 2:
            persone=3;
            break;
        case 3:
            persone=4;
            break;
        case 4:
            persone=5;
            break;
        case 5:
            persone=6;
            break;
    }
    //calcola il prezzo
    prezzo=km*modprezzo*persone;
    //modifico "risultato" col risultato effettivo
    document.getElementById("costo").innerHTML="Prezzo:"+prezzo;
}