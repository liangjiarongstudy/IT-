// 控制台打印内容
$.fn.extend({
    print:function(){
        console.log($(this).html());
    }
})


// 两个值比较大小
$.extend({
    getMax:function(x,y){
        return x > y ? x : y;
    }
})