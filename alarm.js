let alarminput = document.getElementById('alarminput');
let set = document.getElementById('alarmbtn');
set.addEventListener('click', () => {
    set.classList.remove('btn-primary');
    set.classList.add('btn-secondary');
    var time = new Date(alarminput.value);
    showtimer(time);


});
function showtimer(time) {
   
    var myfunc = setInterval(function () {
        var currenttime = new Date();
        let cunt = document.getElementById('cunt');
        var getmin,gethour;
        if(time.getHours() - currenttime.getHours()>0){
             gethour = time.getHours() - currenttime.getHours()-1;
        }
        else{
            gethour=0;
        }
        if(time.getMinutes() - currenttime.getMinutes()>0){
             getmin = time.getMinutes() - currenttime.getMinutes()-1;
        }
        else{
            getmin=0;
        }
        var timer = ((time.getDate() - currenttime.getDate()) * 24 + gethour) + ':' + (getmin) + ':' + (60-currenttime.getSeconds() - time.getSeconds());


        let str = "0:0:60";
        if (timer === str) {
            cunt.innerHTML = `TIME IS UP!!!`;
            stop(myfunc);

        }
        else {

            cunt.innerHTML = timer;
            console.log(timer);
        }
    }, 1000)
}

function stop(myfunc) {


    clearInterval(myfunc);
    var audio = new Audio('https://freshly-ground.com/data/audio/binaural/Mak.mp3');
    audio.play();
}

