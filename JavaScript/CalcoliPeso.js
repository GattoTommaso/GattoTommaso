function calcola(){
    //psp=peso specifico
    var volume,psp,peso;
    //prendo il valore e lo salvo in volume
    volume = document.getElementById("volume").value;
    //prendo l'indice dell'elenco
    var scelta = document.getElementById("materiali").selectedIndex;
    //a seconda dell'indice imposta il peso specifico e calcola il peso reale
    switch(scelta){
        case 0:
            psp=7.8;
            break;
        case 1:
            psp=2.75;
            break;
        case 2:
            psp=8.7;
            break;
        case 3:
            psp=8.93;
            break;
    }
    peso=volume*psp;
    //modifico "risultato" col risultato effettivo
    document.getElementById("peso").innerHTML="Peso:"+peso;
}