document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

$(function() {
    let header = jQuery(".logo-imp");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 700) { 
            header.addClass("display-none");
        } else {
            header.removeClass('display-none');
        }
    });
});

$(function() {
    let header = jQuery(".logo-imp");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 700) { 
            header.addClass("display-none");
        } else {
            header.removeClass('display-none');
        }
    });
});
