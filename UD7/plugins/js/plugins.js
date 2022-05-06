(function ($) {
    jQuery.fn.fadeConColor = function (options) {
        let config = {
            'color': 'blue',
            'backgroundColor': 'yellow'
        };

        let settings = jQuery.extend(config, options);

        return this.fadeToggle(1000, function () {
            $(this).fadeToggle(1000).css(settings);
        });
    };

    jQuery.fn.desaparece = function (options) {
        options ??= "hide";

        switch (options) {
            case "hide":
                return this.hide();
            case "fadeOut":
                return this.fadeOut();
            case "slideUp":
                return this.slideUp();
        }
    };

    jQuery.fn.aparece = function (options) {
        options ??= "show";

        switch (options) {
            case "show":
                return this.show();
            case "fadeIn":
                return this.fadeIn();
            case "slideDown":
                return this.slideDown();
        }
    };

    jQuery.fn.lista = function () {
        this.filter('li').each(function (index) {
            switch (index % 3) {
                case 0:
                    return $(this).css('background-color', 'red');
                case 1:
                    return $(this).css('background-color', 'green');
                case 2:
                    return $(this).css('background-color', 'blue');
            }
        })
    };
})(jQuery);