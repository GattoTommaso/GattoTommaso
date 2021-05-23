function creaFigura(){
    var c = document.getElementById('lavagna');
    var Xinserita=0, Yinserita=0;
    const X=c.width/2;   //ascissa origine
    const Y=c.height/2;  //ordinata origine
    const u = 20;         //unità di misura
    var ctx=c.getContext("2d");

    ctx.strokeStyle="black";
    ctx.fillStyle="black";

    ctx.moveTo(X+50,20);  //segmento unità di misura
    ctx.lineTo(X+50 + u,20); 

    ctx.moveTo(20,Y);  // punto di partenza
    ctx.lineTo(c.width-20,Y);  //asse x

    ctx.moveTo(c.width-20,Y-4);  //punta asse x
    ctx.lineTo(c.width-20,Y+4);
    ctx.lineTo(c.width-12,Y);
    ctx.lineTo(c.width-20,Y-4); //fine punta asse x

    ctx.moveTo(X,20);  //coordinate punto di partenza
    ctx.lineTo(X,c.height-20);  //asse y

    ctx.moveTo(X-4,20);  //punta asse y
    ctx.lineTo(X+4,20);
    ctx.lineTo(X,12);
    ctx.lineTo(X-4,20); //fine punta asse y

    ctx.stroke();  //disegna
    ctx.fill(); //riempimento frecce
    ctx.fillStyle="rgb(0,0,0)";

    // scrive X, Y, O, u
    ctx.fillText('X',c.width-20,Y+15);
    ctx.fillText('Y',X+5,15);
    ctx.fillText('O',X+2,Y+10);
    ctx.fillText('u',X+50+u/2,30);

    //TRASLAZIONE
    ctx.translate(X,Y);
 
    //Esempio di coordinate e punto M
    Xinserita = document.getElementById("x").value;
    Yinserita = document.getElementById("y").value;
    ctx.fillStyle="rgb(255,0,0)";
    ctx.fillRect(Xinserita*u,-Yinserita*u,2,2);//x, y, grandezza linea orizzonatale, grandezza linea verticale
    ctx.fillText('M',Xinserita*u+2,-Yinserita*u);//testo, x, y
}