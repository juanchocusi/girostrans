;
(function ($) {
    $.fn.fixMe = function () {
        return this.each(function () {
            var $this = $(this),
                    $t_fixed;
            function init() {
                $this.wrap('<div class="container" />');
                $t_fixed = $this.clone();
                $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
                resizeFixed();
            }
            function resizeFixed() {
                $t_fixed.find("th").each(function (index) {
                    $(this).css("width", $this.find("th").eq(index).outerWidth() + "px");
                });
            }
            function scrollFixed() {
                var offset = $(this).scrollTop(),
                        tableOffsetTop = $this.offset().top,
                        tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
                if (offset < tableOffsetTop || offset > tableOffsetBottom)
                    $t_fixed.hide();
                else if (offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                    $t_fixed.show();
            }
            $(window).resize(resizeFixed);
            $(window).scroll(scrollFixed);
            init();
        });
    };
})(jQuery);

//$(document).ready(function () {
//    $("#tabla_sucursales").fixMe();
//    $(".up").click(function () {
//        $('html, body').animate({
//            scrollTop: 0
//        }, 2000);
//    });
//});

// JScript File
;
(function ($) {
    $.fn.tableScroll = function (tableWidth, tableHeight)
    {
        if (typeof (this) !== 'undefined')
        {
            this.css('width', '98%');
//Fijamos la primera fila
            var trCab = this.find('tr:first');
            with (trCab) {
                css('position', 'relative');
                css('top', '0');
                css('width', '100%');
                css('background-color', 'red');
            }
//Incluimos un <div> que es el contenedor de la tabla
// y que va a mostrar el scroll
            this.wrap("<div id='tbScrollContainer'></div>");
            var containerEl = $('#tbScrollContainer');
            with (containerEl) {
                css('overflow-y', 'auto');
                css('height', tableHeight);
                css('width', tableWidth);
            }
        }
    };
})(jQuery);
$(document).ready(function(){ 
    $('#tabla_sucursales').tableScroll('100%',300); 
});