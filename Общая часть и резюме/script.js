var  name="Грубляк";
document.getElementById('SecondName').innerHTML= name;
function rename(){
    var input = document.getElementById('txt').value;
    document.getElementById('SecondName').innerHTML=input;
}

function Rnd()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('RndText').style.backgroundColor=color
}