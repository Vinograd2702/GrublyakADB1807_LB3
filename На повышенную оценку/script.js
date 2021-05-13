let ColorRainbow = ["#ff0000","#ffa500","#ffff00","#008000","#0000ff","#4b0082","#ee82ee"];
function Sw(){
    ColorRainbow.unshift(ColorRainbow.pop());
}
function Cycl(){
    for (let i = 1; i < 8; i++) {
        document.getElementById('str'+ i).style.background = ColorRainbow[i-1];
    }
    Sw()
}
function CyclTime(){
    let timerId =  setInterval(()=> Cycl(), 300);
    setTimeout(() => { clearInterval(timerId); Cycl(); }, 5000);
}   
