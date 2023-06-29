<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv='content-language' content='en'>
    <title>hb Swiper Fullscreen</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <link rel="stylesheet" href="hbSwiper/css/swiper.css" />
    <link rel="stylesheet" href="hbSwiper/css/mySwiper.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <div id="wrapper">
        <div id="content1">
            <h1>hb Swiper</h1>
            <p>
                Swiper with automatic reading of images from a directory, image descriptions and full screen
            </p>
        </div>
        <?php include "hbSwiper/php/hbSwiper_1.php"; ?>
        <div id="content2">
            <h4>More content</h4>
            <p>ABCDEFG</p>
            <p>ABCDEFG</p>
        </div>
        <?php include "hbSwiper/php/hbSwiper_2.php"; ?>
        <div id="content3">
            <h4>More content</h4>
            <p>ABCDEFG</p>
            <p>ABCDEFG</p>
        </div>
    </div>
    <?php include "hbSwiper/php/scripts.php"; ?>
</body>

</html>