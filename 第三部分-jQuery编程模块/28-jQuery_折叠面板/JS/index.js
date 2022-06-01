$("h3").click(function() {


    //is  判断当前元素是否显示(:visible)显示返回true。否则返回false

    if ($(this).siblings().is(":visible")) {
        //隐藏
        $(this).siblings().slideUp()
        $(this).find("span").html(">")
    } else {
        //显示
        $(this).siblings().slideDown();
        //隐藏其他元素
        $(this).parent().siblings().find(".contant").slideUp();
        $(this).find("span").html("v");
        $(this).parent().siblings().find("span").html(">");
    }

})