//自执行函数
$(function() {

    //什么时候显示回到顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $("#btn").fadeIn(300);
        } else {
            $("#btn").fadeOut(300);
        }
    })
    $("#btn").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 500)
    })
})