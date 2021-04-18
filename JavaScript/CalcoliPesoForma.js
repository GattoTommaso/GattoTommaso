function calcola(){
    var altezza,sesso,eta,kg;
    var scelta;
    var peso;
    var altezzaMetri;
    
    altezza = document.getElementById("Altezza").value;
    scelta = document.getElementById("Sesso").selectedIndex;
    switch(scelta){
        case 0:
            sesso=1;
            break;
        case 1:
            sesso=2;
            break;
    }
    eta = document.getElementById("Eta").value;
    kg = document.getElementById("Peso").value;

    //formula di Lorenz
    if(sesso==1){
        peso=altezza-100-(altezza-150)/4;
    }
    else if(sesso==2){
        peso=altezza-100-(altezza-150)/2;
    }
    document.getElementById("PesoLorenz").innerHTML=peso+"kg";

    //formula di Broca
    if(sesso==1){
        peso=altezza-100;
    }
    else if(sesso==2){
        peso=altezza-104;
    }
    document.getElementById("PesoBroca").innerHTML=peso+"kg";

    //formula di Wan der Vae
    if(sesso==1){
        peso=(altezza-150)*0.75+50;
    }
    else if(sesso==2){
        peso=(altezza-150)*0.6+50;
    }
    document.getElementById("PesoWanderVael").innerHTML=peso+"kg";

    //formula di Perrault
    peso=altezza-100+eta/10*0.9;
    document.getElementById("PesoPerrault").innerHTML=peso+"kg";

    //formula di BMI
    altezzaMetri=altezza/100;
    peso=kg/(altezzaMetri*altezzaMetri);
    document.getElementById("PesoBMI").innerHTML=peso;
}