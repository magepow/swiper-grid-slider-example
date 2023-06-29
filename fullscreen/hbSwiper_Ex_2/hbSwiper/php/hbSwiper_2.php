<div id="mySwiperContainer_2">
    <div class="swiper" id="mySwiper_2">
        <div class="swiper-wrapper">
            <?php
            include "hbSwiper/php/init_2.php";
            include "hbSwiper/php/appendImages.php";
            ?>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        <div id="swiper-fullscreen">Double click for Fullscreen</div>
    </div>
    <div class="swiper-hbPagination"></div>
    <section>
    <div class="swiper-texts">
        <?php
        include "hbSwiper/php/readFileDescriptions.php";
        ?>
    </div>
    <div class="swiper-count"><?php echo $anz; ?></div>
    <div class="swiper-imageList">
        <?php
        include "hbSwiper/php/imageList.php"; 
        ?>
    </div>
    </section>  
</div>
<div id="myImgDescription_2"></div>
