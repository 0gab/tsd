var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.3,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 25
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 3.2,
            spaceBetween: 25
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5.3,
            spaceBetween: 25
        }
    }
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4.3,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 25
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 2.2,
            spaceBetween: 25
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4.3,
            spaceBetween: 25
        }
    }
});
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 75,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 25
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 25
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 75
        }
    }
});
$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});