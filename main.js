var time = 41;
var attempts = 3;

document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.shiftKey && event.altKey && event.key === 'R') {
        alert('Baka has been defused');
        window.stop();
        window.close();
    }

    if(event.ctrlKey && event.altKey && event.shiftKey && event.key === 'G' || event.key === 'B') {
        if(attempts == 1){
            bomb();
        } else {
            attempts = attempts - 1;
            alert(attempts + " attempts left");
        }
    }
});

function code(length) {
    var combination = '';

    for (var i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      combination += randomDigit.toString();
    }

    return combination;
}

const pin = code(4);

function defuse(id){
    const idelem = document.getElementById(id);
    const error = document.getElementById('error');

    if(idelem.value != pin){
        attempts = attempts - 1;
        error.innerHTML = attempts + " attempts left";
        idelem.value = "";
        if(attempts == 0){
            bomb();
        }
    } else {
        alert('You are not baka');
        window.stop();
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
    
    window.open("bomb.html", "popup", "width=250,height=150");

    window.stop();
}

setInterval(timebomb, 1000);
