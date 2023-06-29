function initDescriptions(swiper, swiperContainerID, descriptionID, descriptionFadeIn, descriptionFadeOut) {

    if (document.getElementById(descriptionID)) {
        // Create Image List (variables 'description[filename]' and 'imageList')
        var delimiter = String.fromCharCode(9); // (Tabulator)
        var delaySeparator = "__"; // two underlines
        var filename = new Array(); // Splitting of file entries into filename and image description
        var descript = new Array(); // image description
        var descriptionEntry = new Array();
        var description = new Array(); //Associative array: description[filename]
        var cntDescriptions = parseInt(document.querySelector("#" + swiperContainerID + " #picTextsCount").textContent);
        var separatingIndex;
        var delayIndex;
        var suffixIndex;
        if (cntDescriptions > 0) {
            for (var i = 1; i <= cntDescriptions; i++) {
                descriptionEntry[i] = document.querySelector("#" + swiperContainerID + " #swiper-picText" + i).innerHTML;
                separatingIndex = descriptionEntry[i].indexOf(delimiter);
                filename[i] = descriptionEntry[i].substring(0, separatingIndex);
                // Unlesbares Zeichen am Anfang der Textdatei eliminieren
                if (filename[i].charCodeAt(0) > 255) filename[i] = filename[i].substring(1, filename[i].length);
                delayIndex = filename[i].indexOf(delaySeparator);
                if (delayIndex > 0) {
                    suffixIndex = filename[i].indexOf(".", delayIndex);
                    filename[i] = filename[i].slice(0, delayIndex) + filename[i].slice(suffixIndex);
                }
                descript[i] = descriptionEntry[i].substring(separatingIndex + delimiter.length, descriptionEntry[i].length);
                description[filename[i]] = descript[i];
            };
        }
        var count = parseInt(document.querySelector("#" + swiperContainerID + " .swiper-count").textContent);
        var imageList = new Array();
        var divImageList = document.querySelector("#" + swiperContainerID + " .swiper-imageList");
        for (var i = 0; i < count; i++) {
            imageList.push(divImageList.children[i].textContent);
        }
        // Show first image description
        if (description[imageList[0]] == undefined) {
            document.getElementById(descriptionID).innerHTML = "";
        } else {
            document.getElementById(descriptionID).innerHTML = description[imageList[0]];
        }

        // Prepare change of descriptions
        var oldRealIndex = -1;
        swiper.on('transitionStart', function() {
            if (this.realIndex != oldRealIndex) fadeoutDescription(this);
        });
        swiper.on('transitionEnd', function() {
            if (this.realIndex != oldRealIndex) changeDescription(this);
        });

        function fadeoutDescription(data) {
            document.getElementById(descriptionID).fadeOut(descriptionFadeOut, false);
        }

        function changeDescription(data) {
            if (description[imageList[data.realIndex]] == undefined) {
                document.getElementById(descriptionID).innerHTML = "";
            } else {
                document.getElementById(descriptionID).innerHTML = description[imageList[data.realIndex]];
            }
            oldRealIndex = data.realIndex;
            document.getElementById(descriptionID).fadeIn(descriptionFadeIn, false);
        }
    }
}