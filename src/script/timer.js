function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] === node) return num;
        if (children[i].nodeType === 1) num++;
    }
    return -1;
}

document.addEventListener('DOMContentLoaded', function () {
    let minute = 0;///20
    let second = 5;///0
    let cron = null;

    let play = document.querySelector('.play--js')
    let stop = document.querySelector('.stop--js')


    play.addEventListener('click', function () {
        disableSlider()
        disableSliderBreak()
        onStart()
    })
    stop.addEventListener('click', function () {
        disableSlider()
        disableSliderBreak()
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

        if (minute === 0 && second === 0) {
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

    ////////////////break
    let circle = 1;
    let breakTime = 5;

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
                console.log('i', i)
                tomatoes[i].classList.add('active');
                console.log('index', index)
            }
            let tomatoCircle = this.getAttribute("data-circle");
            circle = Number(tomatoCircle)
            console.log('tomat',tomato)
            console.log('circle',circle)
            console.log('circle',tomatoCircle)
        })

    })


})
