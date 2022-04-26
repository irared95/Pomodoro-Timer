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
    let minute = 20;
    let second = 0;
    let cron = null;

    let play = document.querySelector('.play--js')
    let stop = document.querySelector('.stop--js')



    play.addEventListener('click', function () {
        disableSlider()
        onStart()
    })
    stop.addEventListener('click', function () {
        disableSlider()
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

    $('.slider-time--js').on('afterChange', function (){
        const timeSliderCurrent = document.querySelector('.slider-time--js .slick-current')
        let time = timeSliderCurrent.getAttribute("data-time");
        minute = Number(time)
        showTime(minute, second)
    })

    function disableSlider (){
        const slider = document.querySelector('.slider-time--js');
        slider.classList.toggle('active');
    }






})
