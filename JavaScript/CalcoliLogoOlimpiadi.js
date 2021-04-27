function creaFigura(){
    var mioCanvas = document.getElementById("canvas1");
    var ctx1 = mioCanvas.getContext("2d");

    //rosso
    ctx1.beginPath();
    ctx1.arc(360,100,50,0,2*Math.PI,true);
    ctx1.lineWidth=4;
    ctx1.strokeStyle = "#ff0000";
    ctx1.stroke();
    ctx1.closePath();

    //verde
    ctx1.beginPath();
    ctx1.arc(295,150,50,31.2,364.5,true);
    ctx1.lineWidth=4;
    ctx1.strokeStyle = "#008000";
    ctx1.stroke();
    ctx1.closePath();

    //nero
    ctx1.beginPath();
    ctx1.arc(230,100,50,1.40,1.10,false);
    ctx1.lineWidth=4;
    ctx1.strokeStyle = "#0a0a0a";
    ctx1.stroke();
    ctx1.closePath();

    //giallo
    ctx1.beginPath();
    ctx1.arc(165,150,50,31.2,364.5,true);
    ctx1.lineWidth=4;
    ctx1.strokeStyle = "#ffff00 ";
    ctx1.stroke();
    ctx1.closePath();

    //azzurro
    ctx1.beginPath();
    //ctx1.arc(100,100,50,0,2*Math.PI,true);
    ctx1.arc(100,100,50,1.40,1.10,false);
    ctx1.lineWidth=4;
    ctx1.strokeStyle = "#007fff";
    ctx1.stroke();

    //per riempirli
    //ctx.fillStyle = "#FF0000";
    //ctx.fill();
}

function giorno_notte(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}