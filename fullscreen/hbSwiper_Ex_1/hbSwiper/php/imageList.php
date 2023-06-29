<?php
//$imgFolder = "...";
$allebilder = scandir($imgFolder);
$anz = 0;
foreach ($allebilder as $bild) {
	$bildinfo = pathinfo($imgFolder."/".$bild);
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db") {
		$anz++;
		$posUnderlines = strpos($bildinfo['basename'], "__");  // two underlines
		if ($posUnderlines !== false) {
			$posSuffix = strpos($bildinfo['basename'], ".", $posUnderlines);
			if ($posSuffix !== false) {
				$delay = intval(substr($bildinfo['basename'], $posUnderlines + 2, $posSuffix - $posUnderlines - 2));
				$bildinfo['basename'] = substr($bildinfo['basename'], 0, $posUnderlines) . substr($bildinfo['basename'], $posSuffix);
			}
		}
?>
		<div><?php echo $bildinfo['basename'];?></div>
<?php
	};
};
?>
