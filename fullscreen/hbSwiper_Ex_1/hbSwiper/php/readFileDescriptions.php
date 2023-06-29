<?php
//$textFile = "...";
$Anzahl = 0;
if (file_exists ($textFile)) {
	$eintrag = file ($textFile);
	$Anzahl = count ($eintrag);
	if ($Anzahl > 0) {
		$nr = 0;
		foreach ($eintrag as $zeile) {
			$nr++;
			echo "<div id='swiper-picText".$nr."'>".$zeile."</div>";
		}
	}
}
echo "<div id='picTextsCount'>".$Anzahl."</div>";
?>