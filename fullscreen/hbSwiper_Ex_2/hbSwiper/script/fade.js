if (!Element.prototype.fadeIn) {
    Element.prototype.fadeIn = function() {
        let ms = !isNaN(arguments[0]) ? arguments[0] : 400,
            func = typeof arguments[0] === 'function' ? arguments[0] : (typeof arguments[1] === 'function' ? arguments[1] : null),
            displayNone = typeof arguments[1] === 'boolean' ? arguments[1] : (typeof arguments[2] === 'boolean' ? arguments[2] : true);

        this.style.opacity = 0;
        this.style.filter = "alpha(opacity=0)";
        if (displayNone) this.style.display = "block";
        this.style.visibility = "visible";

        let $this = this,
            opacity = 0,
            timer = setInterval(function() {
                opacity += 50 / ms;
                if (opacity >= 1) {
                    clearInterval(timer);
                    opacity = 1;

                    if (func) func('done!');
                }
                $this.style.opacity = opacity;
                $this.style.filter = "alpha(opacity=" + opacity * 100 + ")";
            }, 50);
    }
}

if (!Element.prototype.fadeOut) {
    Element.prototype.fadeOut = function() {
        let ms = !isNaN(arguments[0]) ? arguments[0] : 400,
            func = typeof arguments[0] === 'function' ? arguments[0] : (typeof arguments[1] === 'function' ? arguments[1] : null),
            displayNone = typeof arguments[1] === 'boolean' ? arguments[1] : (typeof arguments[2] === 'boolean' ? arguments[2] : true);

        let $this = this,
            opacity = 1,
            timer = setInterval(function() {
                opacity -= 50 / ms;
                if (opacity <= 0) {
                    clearInterval(timer);
                    opacity = 0;
                    if (displayNone) $this.style.display = "none";
                    $this.style.visibility = "hidden";

                    if (func) func('done!');
                }
                $this.style.opacity = opacity;
                $this.style.filter = "alpha(opacity=" + opacity * 100 + ")";
            }, 50);
    }
}

// Example: Calls the "alert" function with the message "done!" after 1500ms - alert('done!')
// elem.fadeIn(1500, alert);