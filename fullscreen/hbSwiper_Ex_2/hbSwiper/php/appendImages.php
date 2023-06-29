<?php
//$imgFolder = "...";
$allebilder = scandir($imgFolder);
$anz = 0;
foreach ($allebilder as $bild) {
	$bildinfo = pathinfo($imgFolder."/".$bild);
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db") {
		$anz++;
		$delay = 0;
		$posUnderlines = strpos($bildinfo['basename'], "__");  // two underlines
		if ($posUnderlines !== false) {
			$posSuffix = strpos($bildinfo['basename'], ".", $posUnderlines);
			if ($posSuffix !== false) {
				$delay = intval(substr($bildinfo['basename'], $posUnderlines + 2, $posSuffix - $posUnderlines - 2));
			}
		}
		if ($delay > 0) {
?>
			<div class="swiper-slide" data-swiper-autoplay="<?php echo $delay;?>"><img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" /></div>
<?php
		} else {
?>
			<div class="swiper-slide"><img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" /></div>
<?php
		}
	};
};
?>
