// Parameters of the initSwiper function:
//
// swiper object variable
// swiperID 
// swiperContainerID
// swiperSpeed   (duration of the image change)
// descriptionID 
// descriptionFadeIn:  time to fade in the image descriptions
// descriptionFadeOut: time to fade out the image descriptions - must be smaller than swiperSpeed'

//initSwiper(swiper_1, swiperID, swiperContainerID, swiperSpeed, descriptionID, descriptionFadeIn, descriptionFadeOut);

var swiper_1;
initSwiper(swiper_1, "mySwiper_1", "mySwiperContainer_1", 700, "myImgDescription_1", 300, 500);