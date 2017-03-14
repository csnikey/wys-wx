//自定义弹出框，包括1个参数，第一个参数为内容（必填） 默认2s后消失
function mtip(contValue) {
	layer.open({
		content: contValue,
		time: 2,
		shadeClose: false
	});

}

//自定义弹出框，包括3个参数，第一个参数为内容（必填），第二个参数为确定按钮的内容值（选填，不填的话是默认值）,第三个参数为标题（选填，不填则不显示）
function malert(contValue, btnValue, titleValue) {
	if (btnValue == null) {
		btnValue = '确定';
	} else {
		btnValue = btnValue;
	};

	if (titleValue == null) {
		layer.open({
			content: contValue,
			btn: [btnValue],
			shadeClose: false
		});
	} else {
		titleValue = titleValue;
		layer.open({
			content: contValue,
			btn: [btnValue],
			title: [titleValue],
			shadeClose: false
		});
	}


}



//自定义确认框，包括3个参数，第一个参数为内容（必填），第二个参数为左边以及右边按钮的内容（选填，不填则认为是默认值）,第三个参数为标题（选填，不填则不显示）
function mconfirm(contValue, btnValue, titleValue) {
	if (btnValue == null) {
		btnValue = ['确定', '取消'];
	} else {
		btnValue = btnValue;
	};

	if (titleValue == null) {
		layer.open({
			content: contValue,
			btn: btnValue,
			shadeClose: false,
			yes: function(index) {
				layer.close(index);
			}
		});
	} else {
		layer.open({
			title: titleValue,
			content: contValue,
			btn: btnValue,
			shadeClose: false,
			yes: function(index) {
				layer.close(index);
			}
		});
	}


}



//自定义等待框，包括1个参数，第一个参数为内容（选填） 默认2s后消失，如果没有参数，则不显示，有关的dom以及样式请联系前端修改
function mload(contValue) {
	if (contValue == null) {
		layer.open({
			type: 2,
			time: 2,
			shadeClose: false
		});

	} else {
		layer.open({
			type: 2,
			content: contValue,
			time: 2,
			shadeClose: false
		});
	}


}


//自定义页面层，包括1个参数，参数为需要展示的div模型,第二个参数为展示的模型（全屏还是部分）
//全局style 参考'width:100%; height:'+ document.documentElement.clientHeight +'px'
//部分style参考 'width:80%; height:300px'
function mpage(htmlStr, styleStr) {
	if (styleStr == null) {
		var pagei = layer.open({
			type: 1,
			content: htmlStr,
			shadeClose: false,
			style: 'width:100%; height:' + document.documentElement.clientHeight + 'px',
			success: function(olayer) {
				olayer.getElementsByClassName('closediv')[0].onclick = function() {
					layer.close(pagei)
				}
			}
		});
	} else {
		var pagei = layer.open({
			type: 1,
			content: htmlStr,
			style: styleStr,
			shadeClose: true,
			success: function(olayer) {
				olayer.getElementsByClassName('closediv')[0].onclick = function() {
					layer.close(pagei)
				}
			}
		});
	}




}


/*关闭所有的弹出框   当加载完数据之后执行关闭遮盖*/
function mlayerClose() {
	layer.closeAll()
}