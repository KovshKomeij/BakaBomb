var time = 30;
var attempts = 3;

function defuse(id){
    const code = document.getElementById(id);
    const error = document.getElementById('error');

    if(id.value != "1234"){
        attempts = attempts - 1;
        error.innerHTML = attempts + " attempts left";
        id.value = "";
        if(attempts == 0){
            bomb();
        }
    } else {
        alert('You are not baka');
        window.close();
    }
}

function timebomb(){
    const timer = document.getElementById('timer');
    time = time - 1;
    timer.innerHTML = time;

    if(time < 0){
        bomb();
    }
}

function bomb(){
    alert('You are baka!');

    var left = left + Math.floor(Math.random() * window.screen.width);
    var tophei = tophei + Math.floor(Math.random() * window.screen.height);

    window.open('bomb.html', 'popup', 'screenX=' + left + ',screenY=' + tophei + ',width=250,height=150');
}

setInterval(timebomb, 1000);