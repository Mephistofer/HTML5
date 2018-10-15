var _input = document.getElementById('chat_textarea');
var _btn = document.getElementById('send_chat_btn');
var number = 0;
var mytimer = null;
var len = String(number).length;
var lastlen = String(number).length;

function autoOutput() {
    mytimer = setInterval(submit, 1000);
}

function submit() {
    if (number > 10000) {
        clearInterval(mytimer);
        return;
    }
    lastlen = String(number).length;
    number++;
    len = String(number).length;
    timerChange();
    _input.value = number;
    _btn.click();
}

function timerChange() {
    if (lastlen !== len) {
        var time = 1000 * len;
        clearInterval(mytimer);
        mytimer = setInterval(submit, time);
    }
}

function stop() {
    clearInterval(mytimer);
}
autoOutput();  