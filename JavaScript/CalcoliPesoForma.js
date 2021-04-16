function calcola(){
    var altezza,sesso,eta;
    var scelta;
    var Lorenz,Broca,Wan,Perrault,BMI;
    var media, altezzaMetri;
    
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

    //formula di Lorenz
    if(sesso==1){
        Lorenz=altezza-100-(altezza-150)/4;
    }
    else if(sesso==2){
        Lorenz=altezza-100-(altezza-150)/2;
    }
    document.getElementById("PesoLorenz").innerHTML=Lorenz+"kg";

    //formula di Broca
    if(sesso==1){
        Broca=altezza-100;
    }
    else if(sesso==2){
        Broca=altezza-104;
    }
    document.getElementById("PesoBroca").innerHTML=Broca+"kg";

    //formula di Wan der Vae
    if(sesso==1){
        Wan=(altezza-150)*0.75+50;
    }
    else if(sesso==2){
        Wan=(altezza-150)*0.6+50;
    }
    document.getElementById("PesoWanderVael").innerHTML=Wan+"kg";

    //formula di Perrault
    Perrault=altezza-100+eta/10*0.9;
    document.getElementById("PesoPerrault").innerHTML=Perrault+"kg";

    //formula di BMI
    media=Lorenz+Broca+Wan+Perrault;
    media=media/3;
    altezzaMetri=altezza/100;

    BMI=media/(altezzaMetri*altezzaMetri);

    document.getElementById("PesoBMI").innerHTML=BMI;
}