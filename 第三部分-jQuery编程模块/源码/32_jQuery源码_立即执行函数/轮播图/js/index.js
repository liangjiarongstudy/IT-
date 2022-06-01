$(function () {
    // 设置标识 idx  代表当前显示第几张图片
    var idx = 0;

    // 读取所有的图片
    var lis = $("#m_unit ul li");

    // 定时器：让轮播图自己动起来  每间隔3秒，调用leftRun
    var timer = setInterval(leftRun, 2000)


    // 鼠标滑动到轮播图上的事件, 清除掉定时器
    $("#box").mouseenter(function () {
        clearInterval(timer)
    })

    // 鼠标滑出轮播图，继续自动轮播
    $("#box").mouseleave(function () {
        timer = setInterval(leftRun, 3000);
    })


    // 左按钮
    $("#leftBtn").click(leftRun)
    function leftRun() {
        // 隐藏上一张图片
        lis.eq(idx).fadeOut(300)
        // 修改标识
        idx += 1;
        // 边界处理
        if (idx > lis.length - 1) {
            idx = 0;
        }
        // 显示下一张图片
        lis.eq(idx).fadeIn(300)
        changeCircle();
    }

    // 右按钮
    $("#rightBtn").click(function () {
        lis.eq(idx).fadeOut(300);
        idx -= 1;
        if (idx < 0) {
            idx = lis.length - 1;
        }
        lis.eq(idx).fadeIn(300)
        changeCircle();
    })

    // 指示器改变
    function changeCircle() {
        // 找到当前显示的图片idx，让指示器高亮，然后把他的同级元素的所有高亮都删除掉
        $("#circle ul li").eq(idx).addClass("current").siblings().removeClass("current");
    }
})