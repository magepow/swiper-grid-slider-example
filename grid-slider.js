class GridSlider extends HTMLElement {
  constructor() {
    super();
    var $this = this;
    document.addEventListener('DOMContentLoaded', function() {
	    $this.initSlider();
	  });
  }

		uniqid(length) {
			length = length || 10;
            var result       	   = '',
            	characters 	   = 'abcdefghijklmnopqrstuvwxyz0123456789',
            	charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            	result += characters.charAt(Math.floor(Math.random() * charactersLength));
           	}
           	return result;
		}

	  initSlider() {
	  		var $head = document.querySelector('head'),
			  		$body = document.querySelector('body'),
						isRTL = $body.classList.contains('rtl');
						var options = this.datasetToObject(this.dataset);
					    	this.querySelectorAll('.swiper').forEach((element) => {
					    	var selector = 'grid-slider-' + this.uniqid(),
					    			styleId  = selector;
					    	element.classList.add(selector);
					    	element.classList.add('grid-init');
					    	selector = '.' + selector;
		            if(isRTL){
		                element.setAttribute('dir', 'rtl');
		            }
		            if(options.slidesPerView){
									this.sliderRender(element);
									return;
		            }
		            var responsive 	= this.getBreakpoints(options);
								if(responsive == undefined) return;
           			if(iClass === undefined){
									element.querySelectorAll('.swiper-wrapper > *').forEach((el) => {
									    el.classList.add('alo-item');
									});
		              var iClass = '.alo-item';
		            }
            		var classes	= selector + ' '+ iClass,
	            			padding = ((options || {}).spaceBetween === void 0) ? 0 : options.spaceBetween/2,
	            			style 		= '';
								var length = Object.keys(responsive).length;
								Object.entries(responsive).forEach(item => {
									  var key  = parseInt(item[0]), 
                      	value = item[1];
									var col = 0, maxWith = 0, minWith = 0;
									Object.entries(value).forEach(entry => {
									  	var size  = parseInt(entry[0]), 
                      		num = entry[1];
                      minWith = size + 1; col = num;
									});
									if(key+2<length){
										Object.entries(responsive[key+1]).forEach(entry => {
											  	var size  = parseInt(entry[0]), 
		                      		num = entry[1];
		                      maxWith = size; col = num;
										});
										style += ' @media (min-width: '+minWith+'px) and (max-width: '+maxWith+'px)';
									} else { 
										if(key+2 == length) return; // don't use key = length - 1;
										Object.entries(responsive[key]).forEach(entry => {
											  	var size  = parseInt(entry[0]), 
		                      		num = entry[1];
		                      maxWith = size; col = num;
										});
										style += ' @media (min-width: '+maxWith+'px)';
									}
									var clearRtl = classes + ':nth-child('+col+'n+1){clear: left}';
                  clearRtl 	+= ' .rtl ' + classes+':nth-child('+col+'n+1){clear: right}';
									style += ' {'+selector + '{margin: 0 -'+padding+'px}'+classes+'{padding: 0 '+padding+'px; box-sizing: border-box; width: calc(100% / ' + col + ')} ' + clearRtl + '}';
								});	
		           	$head.innerHTML += '<style type="text/css" id="' + styleId + '" >'+style+'</style>';
			    });

	    }

	    datasetToObject(dataset) {
	    	return JSON.parse(JSON.stringify(dataset), (key, value) => {
					if(value === "null") return null;
					if(value === "true") return true;
					if(value === "false") return false;
					if(!isNaN(value)) return Number(value);
				  try {
				       return JSON.parse(value);
				    } catch (e) {
				      return value;
				  }
				});
	    }

	    getBreakpoints(options) {
	    	if(!options.breakpoints) return;
				var gridResponsive = [];
				Object.entries(options.breakpoints).forEach(entry => {
						var size  = entry[0], 
								value = entry[1],
								breakpoint = {};
								breakpoint[size] = parseInt(value.slidesPerView);
								gridResponsive.push(breakpoint);
						});
				return gridResponsive;
	    }

	    sliderRender(element) {
	    	if(element.classList.contains('swiper-initialized')){
	    		return;
	    	}
				var options = this.datasetToObject(this.dataset);
				var swiper = new Swiper(element, options);
	    }
}

customElements.define('grid-slider', GridSlider);
