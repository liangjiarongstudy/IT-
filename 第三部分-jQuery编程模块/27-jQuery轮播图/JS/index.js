//设置标识 代表当前显示第几张图片
$(function() {
    var idx = 0;

    //读取所有的图片
    var lis = $(".m_unit ul li");



    //定时器，轮播图自己动
    var timer = setInterval(leftRun, 2000);



    //鼠标移到轮播图
    $("#box").mouseenter(function() {
        clearInterval(timer);
    });


    //鼠标移出继续动
    $("#box").mouseleave(function() {
        timer = setInterval(leftRun, 2000);
    });


    //右按钮
    $("#rightBtn").click(leftRun);

    function leftRun() {
        //隐藏上一张图片
        lis.eq(idx).fadeOut(500)

        //修改表示
        idx += 1;
        if (idx > lis.length - 1) {
            idx = 0;
        }

        //显示下一张图片
        lis.eq(idx).fadeIn(500)
        changeCircle()
    }


    //左按钮
    $("#leftBtn").click(function() {
        lis.eq(idx).fadeOut(300);
        idx -= 1;
        if (idx < 0) {
            idx = lis.length - 1;
        }
        lis.eq(idx).fadeIn(300);
        changeCircle()
    });


    //指示器改变
    function changeCircle() {
        $("#circle ul li").eq(idx).addClass('current').siblings().removeClass('current');
    }
})