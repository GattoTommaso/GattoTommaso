function Somma(){
    var num1, num2;
    var somma;

    num1=document.getElementById("Num1").value;
    num2=document.getElementById("Num2").value;
    somma=parseInt(num1)+parseInt(num2);
 
    document.getElementById("Somma1").innerHTML=somma;
}

function Visualizza(){
    var num1, num2;
    var somma;

    num1=document.getElementById("Num3").value;
    num2=document.getElementById("Num4").value;
    somma=SommaPassandoDueParametri(num1,num2);

    document.getElementById("Somma2").innerHTML=somma;
}

function SommaPassandoDueParametri(num1,num2){
    
    let sommaConDueParametri;
    sommaConDueParametri=parseInt(num1)+parseInt(num2);
    return sommaConDueParametri;
}