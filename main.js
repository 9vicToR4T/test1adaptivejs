$(document).ready(function () {
    $('.my_icon').click(function (event) {
        $('.my_icon, .invisible-conteiner').toggleClass('active');
        $('.container').toggleClass('goRight');
        $('.one_header').toggleClass('mooveHeader');
    });
});