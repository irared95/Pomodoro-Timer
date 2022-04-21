document.addEventListener('DOMContentLoaded', function () {

    const play = document.querySelector('.play--js');
    const stop = document.querySelector('.stop--js');

    play.addEventListener('click', function () {
        this.classList.toggle('active');
        stop.classList.toggle('active')
    })

    stop.addEventListener('click', function (){
        this.classList.toggle('active');
        play.classList.toggle('active')

    })

})


document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: false,
        dots: false,
        centerMode: true,
    });


})
document.addEventListener('DOMContentLoaded', function () {
    let minute = 0;
    let second = 0;
    let cron;

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
    }

    function onReset() {
        minute = 0;
        second = 0;
        document.querySelector('.clock-face__minutes--js').innerHTML += '00';
        document.querySelector('.clock-face__seconds--js').innerHTML += '00';

    }

    onReset()

    function timer() {
        console.log('second', second)
        second++
        console.log('min', minute)
        if (second === 60) {
            second = 0;
            minute++;
        }

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
