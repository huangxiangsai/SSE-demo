;(function () {
	var temp = '${date} update content: ${msg}';
	var count = 0;

	if(!window.EventSource){
		$('.content').html('this browse no support EventSource Object...');
		return false;
	}

	var url = 'http://127.0.0.1:8081/';
	var eventSource =new EventSource(url);

	eventSource.onopen = function () {
		$('.status').html('连接成功，可获取从服务端推来的消息...');
	}

	eventSource.operror = function () {
		$('.status').html('连接断开...');
	}

	eventSource.onmessage = function (evt) {
		console.log(evt);
		var date = new Date();
		var t = '<p>'+(++count)+". "+date.getHours()+":"+date.getSeconds()+":"+date.getMinutes()+"通过onmessage事件 收到来自send.html页面的消息 : "+ evt.data+'</p>';
		$('.content').append(t);
	}
	eventSource.addEventListener('news', function (evt) {
		var date = new Date();
		var t = '<p>'+(++count)+". "+date.getHours()+":"+date.getSeconds()+":"+date.getMinutes()+"通过news事件 收到来自send.html页面的消息 : "+ evt.data+'</p>';
		$('.content').append(t);
	})

})();