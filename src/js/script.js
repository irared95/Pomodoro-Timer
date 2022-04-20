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