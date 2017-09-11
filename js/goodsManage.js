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
		url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetShopProductList",
		type:"get",
		data:"currId=1&dpid=1",
		success:function(response){
			$.ajax({
				url:"http://app.hyzsnt.com/SurroundingMall.asmx/GetShopProductContentList",
				type:"get",
				data:"currId=1&spid=1",
				success:function(res){
					// console.log(res);
					var goodsContentArr = JSON.parse(res).productContentList;
					console.log(goodsContentArr);

					var goodsArr = JSON.parse(response).productList;
					// console.log(goodsArr);
					var listTable = $("#goods-list");
					for(var i = 0;i < goodsArr.length;i++){//遍历获取到的数据
						for(var j = 0;j < goodsContentArr.length;j++){
							if(goodsArr[i].ProId==goodsContentArr[j].ProId){
								var tempType = goodsContentArr[j].type;
								var tempFiles = goodsContentArr[j].Files;
							}
						}
						var newInfo = document.createElement("tr");
						newInfo.innerHTML = '<td class="proID">'+ goodsArr[i].ProId+'<br>'+ tempType +'</td>\
							<td class="proName">\
								<div>\
									<img src="'+goodsArr[i].Image+'" alt="图片">\
									'+goodsArr[i].proName+'\
									<br>\
									<span>销售价：&yen;'+goodsArr[i].SalePrice+'</span>\
									<br>\
									<span>成本价：&yen;'+goodsArr[i].Price+'</span>\
									<br>\
									<span>库存：<span>120</span></span>\
								</div>\
							</td>\
							<td>'+goodsArr[i].Decript+'</td>\
							<td class="proImg">'+'<img src="'+tempFiles+'" alt=""></td>\
							<td class="operateTd">\
								<div class="operateA">\
									<a>上传图片</a>\
									<span>(必须上传220*200像素以内且最多上传5张)</span>\
									<br>\
									<a>编辑介绍</a>\
									<span>(最多输入500字)</span>\
									<br>\
									<a>修改价格</a>\
									<span>(不可高于市场价20%)</span>\
									<br>\
									<a>修改库存</a>\
									<span>(目前库存120)</span>\
								</div>\
								<div class="operateBtn">\
									<input type="button" value="上架">\
									<input type="button" value= "下架">\
								</div>\
							</td>';
						listTable.append(newInfo);
					}
				}
			})		
		}
	})
})