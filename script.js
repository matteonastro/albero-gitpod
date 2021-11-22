function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');

    
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    
    ctx.beginPath();
    ctx.moveTo(250,500);
    ctx.lineTo(250,400);
    ctx.stroke();

}

function disegna() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,500,500)
    draw();

    
    
}