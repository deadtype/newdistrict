// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Place any jQuery/helper plugins in here.

function viewport() {
    var height = (window.innerHeight ? window.innerHeight : $w.height());
    var menu_height = $(".mainnav").outerHeight();
    var header_height = $(".winery_header").outerHeight();
    var view_adjust = height - menu_height - header_height;
    view_adjust = parseInt(view_adjust) + 'px';
    $(".hero_slider").css('height',view_adjust);
}


function modal_background() {
var context_height = $(document).height();
$('.modal_window_super_container').css('height',context_height);
}

$(document).ready(function() {
    viewport();
     $(window).ready(function() {
        modal_background();
    }); 

    $(window).resize(function() {
        viewport();
        modal_background();
    }); 
});







