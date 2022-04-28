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
function indexInParent(node) {
    let children = node.parentNode.childNodes;
    let num = 0;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === node) return num;
        if (children[i].nodeType === 1) num++;
    }
    return -1;
}

document.addEventListener('DOMContentLoaded', function () {
    let cron = null;

    let minute = 1;///20
    let second = 5;///0

    let circle = 2;
    let breakTime = 1;

    let isTimer = 'timer' // timer or breakTimer
    let counterCircle = 0

    let play = document.querySelector('.play--js')
    let stop = document.querySelector('.stop--js')


    play.addEventListener('click', function () {
        disableSlider()
        disableSliderBreak()
        disableTomato()
        onStart()
    })
    stop.addEventListener('click', function () {
        disableSlider()
        disableSliderBreak()
        disableTomato()
        onStop()
    })

    function onStart() {
        let min = minute
        let breakMin = breakTime

        cron = setInterval(() => {
            if(isTimer === 'timer' && second === 0) {
                console.log(11111, min)
                if(!min) isTimer = 'breakTimer'
                if(min) min--
            }
            if(isTimer === 'breakTimer' && second === 0) {
                console.log(22222)
                if(!breakMin) {
                    isTimer = 'timer'
                    circle++
                }
                if(breakMin) breakMin--
            }
            console.log('isTimer', isTimer)
            timer(min, breakMin);
        }, 200);

    }

    function onStop() {
        clearInterval(cron);
        onReset()
        circle = 0
    }

    function onReset() {
        minute = 0;
        second = 0;
        document.querySelector('.clock-face__minutes--js').innerHTML = '00';
        document.querySelector('.clock-face__seconds--js').innerHTML = '00';
    }


    function timer(min, breakMin) {
        //end timer when completed circles
        if(counterCircle === circle) {
            onStop()
            return false
        }
        if (second === 0) {
            second = 60;
        }

        second--

        if(isTimer === 'timer') {
            showTime(min, second)
        }
        if(isTimer === 'breakTimer') {
            showTime(breakMin, second)
        }
    }

    function showTime(minute, second) {
        document.querySelector('.clock-face__minutes--js').innerHTML = formattingTime(minute);
        document.querySelector('.clock-face__seconds--js').innerHTML = formattingTime(second);
    }

    function formattingTime(time) {
        return time > 9 ? time : `0${time}`
    }

    $('.slider-time--js').on('afterChange', function () {
        const timeSliderCurrent = document.querySelector('.slider-time--js .slick-current')
        let time = timeSliderCurrent.getAttribute("data-time");
        minute = Number(time)
        showTime(minute, second)
    })

    function disableSlider() {
        const slider = document.querySelector('.slider-time--js');
        slider.classList.toggle('active');
    }

    $('.slider-break--js').on('afterChange', function () {
        const breakSliderCurrent = document.querySelector('.slider-break--js .slick-current')
        let timeBreak = breakSliderCurrent.getAttribute("data-break");
        breakTime = Number(timeBreak)
    })

    function disableSliderBreak() {
        const sliderBreak = document.querySelector('.slider-break--js');
        sliderBreak.classList.toggle('active');
    }

    let tomatoes = document.querySelectorAll('.tomato__item--js')

    function clearTomatoes() {
        tomatoes.forEach(function (tomato, index) {
            tomato.classList.remove('active')

        })
    }

    tomatoes.forEach(function (tomato, index) {
        tomato.addEventListener('click', function () {
            clearTomatoes()

            const index = indexInParent(this);
            for (let i = 0; i <= index; i++) {
                tomatoes[i].classList.add('active');
            }
            let tomatoCircle = this.getAttribute("data-circle");
            circle = Number(tomatoCircle)
        })

    })

    function disableTomato() {
        const tomatoStop = document.querySelector('.tomato--js');
        tomatoStop.classList.toggle('disable');
    }


})
