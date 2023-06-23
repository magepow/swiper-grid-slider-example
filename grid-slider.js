
class GridSlider extends HTMLElement {
  constructor() {
    super();
    console.log(this);
    this.querySelectorAll('.swiper').forEach((el) => {
    	console.log(el);
	    var swiper = new Swiper(el, {
	        autoHeight: false,
	        autoplay:3000,
	        centeredSlides: false,
	        delay: 100,
	        direction: 'horizontal', /* 'horizontal' | 'vertical' */
	        effect: 'slide', /* 'slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative' */
	        grid: {
	            rows: 2,
	            fill: "row",
	        },
	        init: true,
	        loop: true,
	        slidesPerView: 1, /* mobile First */
	        spaceBetween: 15,
	        speed: 400,
	        breakpoints: {
	            // when window width is >= 320px
	            320: {
	                slidesPerView: 2,
	                spaceBetween: 20
	            },
	            // when window width is >= 480px
	            480: {
	                slidesPerView: 3,
	                spaceBetween: 30
	            },
	            // when window width is >= 640px
	            640: {
	                slidesPerView: 4,
	                spaceBetween: 40
	            }
	        }
	    });
    });

  }

  toggleResetButton() {
    const resetIsHidden = this.resetButton.classList.contains('hidden');
    if (this.input.value.length > 0 && resetIsHidden) {
      this.resetButton.classList.remove('hidden');
    } else if (this.input.value.length === 0 && !resetIsHidden) {
      this.resetButton.classList.add('hidden');
    }
  }

  onChange() {
    this.toggleResetButton();
  }

  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a');
  }

  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (this.shouldResetForm()) {
      this.input.value = '';
      this.input.focus();
      this.toggleResetButton();
    }
  }
}

customElements.define('grid-slider', GridSlider);
