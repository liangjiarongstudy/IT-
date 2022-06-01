$(".menu li").mouseenter(function() {
    $(this).children(".dropdown").slideDown(500);
});
$(".menu li").mouseleave(function() {
    $(this).children(".dropdown").slideUp();
    (500);
});