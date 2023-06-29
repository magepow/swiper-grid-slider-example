function initSwiper(swiper, swiperID, swiperContainerID, swiperSpeed, descriptionID, descriptionFadeIn, descriptionFadeOut) {

    swiper = new Swiper("#" + swiperID, {
        //spaceBetween: 30,
        //slidesPerView: 1,
        //mousewheel: true,
        keyboard: {
            enabled: true,
        },
        effect: "slide",
        //effect: "fade",
        //effect: "coverflow",
        //effect: "cards",
        //effect: "cube",
        //direction: "vertical",
        //grabCursor: true,
        //lazy: true,
        //rewind: true,
        speed: swiperSpeed,
        loop: false,
        /*autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            stopOnLastSlide: true,
        },*/
        //autoplay: false,
        pagination: {
            el: "#" + swiperContainerID + " .swiper-hbPagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Delete if no image descriptions
    initDescriptions(swiper, swiperContainerID, descriptionID, descriptionFadeIn, descriptionFadeOut);

    // Delete if no fullscreen
    var elFullscreen = document.querySelector("#" + swiperID + " #swiper-fullscreen");
    elFullscreen.fadeIn(600);
    timer = setInterval(function() {
        elFullscreen.fadeOut(1200);
    }, 3000);
    document.getElementById(swiperID).addEventListener("dblclick", function() {
        toggleFullscreen(this);
    });

    // Delete if no hiding the cursor when mouse over image
    document.getElementById(swiperID).addEventListener("mousemove", (event) => {
        event.target.style.cursor = 'auto';
    });
    document.getElementById(swiperID).addEventListener("mouseover", (event) => {
        setTimeout(() => {
            event.target.style.cursor = "none";
        }, 2000);
    });
    document.querySelector("#" + swiperID + " .swiper-button-prev").addEventListener("mouseover", (event) => {
        event.target.style.cursor = 'pointer';
        event.stopPropagation();
    });
    document.querySelector("#" + swiperID + " .swiper-button-prev").addEventListener("mousemove", (event) => {
        event.target.style.cursor = 'pointer';
        event.stopPropagation();
    });
    document.querySelector("#" + swiperID + " .swiper-button-next").addEventListener("mouseover", (event) => {
        event.target.style.cursor = 'pointer';
        event.stopPropagation();
    });
    document.querySelector("#" + swiperID + " .swiper-button-next").addEventListener("mousemove", (event) => {
        event.target.style.cursor = 'pointer';
        event.stopPropagation();
    });
}