document.addEventListener('DOMContentLoaded', function () {
    let minute = 1;
    let second = 5;
    let cron = null;

    let play = document.querySelector('.play--js')
    let stop = document.querySelector('.stop--js')
    play.addEventListener('click', function () {
        onStart()
    })
    stop.addEventListener('click', function () {
        onStop()
    })

    function onStart() {
        cron = setInterval(() => {
            timer();
        }, 1000);

    }

    function onStop() {
        clearInterval(cron);
        onReset()
    }

    function onReset() {
        minute = 0;
        second = 0;
        document.querySelector('.clock-face__minutes--js').innerHTML = '00';
        document.querySelector('.clock-face__seconds--js').innerHTML = '00';
    }


    function timer() {


        if(minute === 0 && second === 0){
            onStop()
            return false
        }

        if (second === 0) {
            minute--;
            second = 60;
        }

        second--

        showTime(minute, second)

    }

    function showTime(minute, second) {
        document.querySelector('.clock-face__minutes--js').innerHTML = formattingTime(minute);
        document.querySelector('.clock-face__seconds--js').innerHTML = formattingTime(second);
    }

    function formattingTime(time) {
        return time > 9 ? time : `0${time}`
    }


})
