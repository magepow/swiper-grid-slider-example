class MediaGallery extends HTMLElement {
  constructor() {
    super();
    var $this = this;
    document.addEventListener("DOMContentLoaded", function (event) {
      $this.initSlider();
    });
    document.addEventListener("MediaGalleryUpdated", function (event) {
      $this.initSlider();
    });
    document.dispatchEvent(new CustomEvent('MediaGalleryReady', {detail:$this}));
  }
  uniqid(length) {
    length = length || 10;
    var result = "",
      characters = "abcdefghijklmnopqrstuvwxyz0123456789",
      charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  initSlider() {
    if (this.classList.contains("media-gallery-init")) return;
    this.classList.add('media-gallery-init');
    var isRTL = document.body.classList.contains("rtl"),
        selector = "media-gallery-" + this.uniqid(),
        gallery  = this.querySelector("gallery .swiper"),
        thumbnail = this.querySelector("thumbnail .swiper"),
        mainAPI      = {};
        if (thumbnail) {
            if(isRTL) thumbnail.setAttribute("dir", "rtl");
            var sliderThumb = this.renderSlider(thumbnail);
            Object.assign(mainAPI, { thumbs: {swiper: sliderThumb } });
        }
        var sliderMain  = this.renderSlider(gallery, mainAPI);
        document.body.addEventListener("afterVariantUpdated", function (event) {
            var variant = event.detail;
            if("featured_media", variant){
                var mediaId = variant.featured_media.id;
                sliderMain.slides.forEach(function(item, index){
                  if(item.dataset.mediaId == mediaId){
                    sliderMain.slideTo(index); 
                    return false;             
                  }
                });             
            }
        });
  }

  datasetToObject(dataset) {
    return JSON.parse(JSON.stringify(dataset), (key, value) => {
      if (value === "null") return null;
      if (value === "true") return true;
      if (value === "false") return false;
      if (!isNaN(value)) return Number(value);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    });
  }

  getBreakpoints(options) {
    if (!options.breakpoints) return;
    var gridResponsive = [];
    Object.entries(options.breakpoints).forEach((entry) => {
      var size = entry[0],
        value = entry[1],
        breakpoint = {};
      breakpoint[size] = parseInt(value.slidesPerView);
      gridResponsive.push(breakpoint);
    });
    return gridResponsive;
  }

  renderSlider(element, api) {
    var $this = this,
        api = api || {};
    if (element.classList.contains("swiper-initialized")) {
      return;
    }
    var options = this.datasetToObject(element.dataset) || {};
    Object.assign(options, api);
    options.on = {
      afterInit: function(){
        if(this.params.direction == 'vertical') return;
        var swiperId = this.slidesEl.id,
          spaceBetween = this.params.spaceBetween,
          rows = this.params.grid.rows;
        if(rows > 1){
          var style = '#' + swiperId + ' .swiper-slide{ height: calc((100% - ' + (rows -1)*spaceBetween + 'px) / ' + rows + ');}';
          $this.appendStyle(style);
        }
      }
    }
    return new Swiper(element, options);
  }

  appendStyle(css) {
    var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.textContent = css;
    document.head.appendChild(style);
  }

}

customElements.define("media-gallery", MediaGallery);
