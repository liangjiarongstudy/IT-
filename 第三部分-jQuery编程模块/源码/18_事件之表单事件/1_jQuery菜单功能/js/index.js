// $(".menu li").mouseenter(function(){
//     // $(".dropdown").css("display","block")
//     // this：鼠标滑动到那个元素，this就代表那个元素
//     $(this).children(".dropdown").slideDown(500)
// })

// $(".menu li").mouseleave(function(){
//     $(this).children(".dropdown").slideUp(500)
// })


$(".menu li").hover(function(){
    $(this).children(".dropdown").slideDown(500)
},function(){
    $(this).children(".dropdown").slideUp(500)
})