Server Send Event demo
----------------------

服务端推送技术的Demo

./client 客户端的代码
./server 服务端的代码


客户端

index.html 用来接收服务端的推送消息
send.html 用来输入服务端要推送的消息内容

服务端使用node

## USE

启动服务端，进入`server`目录使用命令 `node server.js`(假设你已经装了node)

服务端将监听8081端口，*启动前确保端口未被占用*。

服务端启动完，先打开client目录*index.html*页面，打开后，页面将会发送ajax请求，
连接刚启动的服务，建立SSE连接。

然后再打开*send.html*页面，输入内容，点击*send*按钮，再查看*index.html*页面的变化。
