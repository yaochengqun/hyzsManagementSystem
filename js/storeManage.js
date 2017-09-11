$(function(){
	$.ajax({
		url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetShopList",
		type:"get",
		success:function(response){
			var listArr = JSON.parse(response).shopList;
			// console.log(listArr);
			$("h3").text(listArr[0].ShopName);
			$("h4").text("ID:"+listArr[0].id);
		}
	})
	$.ajax({
		url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetShopContentList",
		type:"get",
		data:"currId=1&dpid=1",
		success:function(response){
			var ContentListArr = JSON.parse(response).shopContentList;
			// console.log(ContentListArr);
			$(".dz img").attr("src",ContentListArr[0].Content);
			$(".tx img").attr("src",ContentListArr[0].Content);
			$(".zt img").attr("src",ContentListArr[0].Content);
			$(".introduce").text(ContentListArr[0].IsIntroduce);
			$(".storeInfo").text(ContentListArr[0].IsIntroduce);
		}
	})
})