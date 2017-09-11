$(function(){
	$.ajax({
		url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetShopList",
		type:"get",
		success:function(response){
			var listArr = JSON.parse(response).shopList;
			$("h3").text(listArr[0].ShopName);
			$("h4").text("ID:"+listArr[0].id);
		}
	})
	var wordCount = $(".textArea textarea").val().length;
	// console.log(wordCount);
	$(".wordCount span").text(wordCount);		
})
function changeCount(){
	$(".wordCount span").text($(".textArea textarea").val().length);
}
$(".release").click(function(){
	if($(".textArea textarea").val().length != 0){
		var createDiv = document.createElement("div");
		createDiv.innerHTML = '<div class="newPrepend">\
			'+ new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ new Date().getDate() +'\
			<br>\
			'+ $(".textArea textarea").val() +'\
		</div>';
		$(".releaseBox").prepend(createDiv);
		$(".textArea textarea").val("");
		$(".wordCount span").text($(".textArea textarea").val().length);
	}else{
		alert("请输入公告内容！");
	}
});