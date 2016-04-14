./server/server.js
--------------

## 说明

简单的使用Node实现了SSE(Sever Send Event)。

提供了两个接口, `127.0.0.1:8081/ 、  127.0.0.1:8081/send`


访问`127.0.0.1:8081/`，就提供了SSE(Sever Send Event)

SSE(Sever Send Event)服务端的特点： 

1.  需要的响应头部加上 `"Content-Type": "text/event-stream"`

2.  设置响应的内容,默认的数据格式是：

```
id:11
event:say
retry:1500
data:xxxxx
data:xxxxx


data:xxxxx
```

**id** [MUST NOT],主要是用来告诉客户端发送的消息序号，
当遇到某些原因导致连接断开而重连时，客户端会带上最后一条收到的ID传给服务端，
除非因业务需要不能漏推消息，否则ID可不使用。

**event** [MUST NOT],如果设置了该值，客户端会调用该值对应的，事件处理方法。没有设置则会走`'message'`事件名的回调。

**data** 要推送的字符串，为什么要说推送的是字符串呢，因为SSE

**retry** 连接的超时重试时间


受同源策略的限制，所以例子中还加了`"Access-Control-Allow-Origin": "*"`,是为了支持跨域，允许来自其它域名下的请求。


GC ,SSE也有自己的垃圾回收机制。当EventSource对象状态是正在连接（CONNECTING）状态时，并且该对象有多个事件（`open,message,error`）正在被监听时,


