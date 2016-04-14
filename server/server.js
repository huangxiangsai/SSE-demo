var http = require("http");
var util = require('util');
const EventEmitter = require('events');
var Mydata = function () {
	
};
util.inherits(Mydata, EventEmitter);
var myData = new Mydata();
http.createServer(function(request, response){
  
  console.log(request.url);

  var path = request.url.split('?')[0];
  if(path === '/sendData'){
  	 var data = request.url.split('?')[1];
  	 if(data){
  	 	data = data.split('=')[1];
  	 	myData.emit('news',data);
  	 }
  	 response.writeHead(200, { "Content-Type": "application/json;charset=utf-8", "Access-Control-Allow-Origin": "*" });
  	 response.write('{"data" : "success"}');
  	 response.end();
  }

  if(path === '/'){
	  response.writeHead(200, { "Content-Type": "text/event-stream",
	  	"Cache-Control": "no-cache",
	  	"Access-Control-Allow-Origin": "*" });
	  myData.on('news',function (e) {
	  	var content = Roms()+"data:" +
	      decodeURIComponent(e) + "\n\n";
	    console.log(content);
	    response.write(content);
	  });


  }
  }).listen(8081);



/**
 * [Rom description]
 * @param {[type]} argument [description]
 */
function Roms () {
	var index = parseInt(Math.abs( Math.random()*10)/5);
	if(index){
		return 'event: news\ndata: hxs\n';
	}else{
		return '';
	}
}
