$(function(){
    // 添加索引
    $("#nav>li").each(function(index){
        $(this).attr('index', index)
    });
     
    // tab切换
    $("#nav").on("click", "li", function(){
        var index = $(this).attr('index');
        $(this).addClass('current').siblings().removeClass('current');
        console.log(index);
        var current = $(".main>div").get(index);
        // console.log(current);
        $(current).removeClass('hide').siblings('div').addClass('hide');
    })

})