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
	$.ajax({
		url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetOrderInfo",
		type:"get",
		data:"currId=1&orderId=ZBSC201709041025024673490",
		success:function(response){
			// console.log(response);
			var orderArr = JSON.parse(response).shopProductOrderList;
			console.log(orderArr);
		}
	})
})