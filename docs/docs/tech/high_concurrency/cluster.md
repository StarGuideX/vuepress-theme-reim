# 集群&负载均衡


## 反向代理

请求转发：

轮询、权重、URL-Hash、IP-Hash



## 开源反向代理

lvs、nginx



lvs-四层协议



四层协议 和七层协议图----


负载均衡策略
轮询——做错误发现，重试机制
权重
IP-Hash——同一个IP访问一个地址
least_conn——最少连接数
fair
URL-Hash
均能解决共享Session问题，不常用

用户持久化
Cookie+Session 集群后不能识别
解决方案1：一个IP之访问某个服务器
解决方案2：客户端携带——Cookie(体积大/不安全/易丢失)，更好的token：JWT
解决方案3：Session共享：Sql Server/StateServer/Redis（RedisSession共享会有跨域问题）

