function creaFigura(){
    var mioCanvas = document.getElementById("canvas1");
    var ctx1 = mioCanvas.getContext("2d");

    //base gialla
    ctx1.beginPath();
    ctx1.arc(300,150,100,0,2*Math.PI,true);
    ctx1.fillStyle = "yellow";
    ctx1.fill();
    ctx1.closePath();

    //occhio destro
    ctx1.beginPath();
    ctx1.arc(270,100,25,0,2*Math.PI,true);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.closePath();

    //pupilla occhio destro
    ctx1.beginPath();
    ctx1.arc(270,100,12.5,0,2*Math.PI,true);
    ctx1.fillStyle = "black";
    ctx1.fill();
    ctx1.closePath();

    //occhio sinistro
    ctx1.beginPath();
    ctx1.arc(330,100,25,0,2*Math.PI,true);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.closePath();

    //pupilla occhio sinistro
    ctx1.beginPath();
    ctx1.arc(330,100,12.5,0,2*Math.PI,true);
    ctx1.fillStyle = "black";
    ctx1.fill();
    ctx1.closePath();

    //bocca
    ctx1.beginPath();
    ctx1.arc(300,180,30,0,1*Math.PI,false);
    ctx1.fillStyle = "red";
    ctx1.fill();
    ctx1.closePath();

    //denti
    ctx1.beginPath();
    ctx1.rect(270, 180, 60, 10);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.closePath();
}

function giorno_notte(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}