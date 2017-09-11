/**
 * Created by huzs11 on 2017/9/5.
 */
$(function(){
    $(".list-group").children().click(function(){

        var index = $(this).index();
        $(".rightBox").eq(index).removeClass("boxCont").siblings().addClass("boxCont")
        $(this).addClass("bdl").siblings().removeClass("bdl");
    })
})