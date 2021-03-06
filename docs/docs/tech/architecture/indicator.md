# 数据化指标

## 性能数据指标

| 名称                                           | 说明                                                         | 备注                            |
| ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| 并发数                                         | 在同一时刻与服务器进行了交互的在线用户数量                   |                                 |
| RT(Reaction Time)——响应时间                    |                                                              |                                 |
| QPS(Queries Per Second)——每秒处理的请求数      | 一台服务器每秒能够响应的查询次数（一个页面有多少请求）       | 一次页面请求，可能产生多次QPS   |
| TPS(Transactions Per Second)——每秒处理的事务数 | 一个事务是指一个客户机向服务器发送请求然后服务器做出反应的过程。其过程包括：客户端请求服务端、服务端内部处理、服务端返回客户端。（客户访问一个页面） | 一个页面的一次访问，形成一次TPS |

> 例如，访问一个 Index 页面会请求服务器 3 次，包括一次 html，一次 css，一次 js，那么访问这一个页面就会产生一个“T”，产生三个“Q”。

## 流量数据指标

| 名称                                 |
| ------------------------------------ |
| DAU(Daily Active User)——日活跃用户   |
| MAU(Monthly Active User)——月活跃用户 |



| 名称                                | 说明                                                         | 备注                                            |
| ----------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| PV(Page View)——页面浏览量           | 通常是衡量一个网络新闻频道或网站甚至一条网络新闻的主要指标。 | 用户每一次对网站中的每个页面访问均被记录 1 次。 |
| RV(repeat visitors)——重复访问者数量 |                                                              |                                                 |
| UV(Unique Visitor)——独立访客访问数  | 统计 1 天内访问某站点的用户数(以 cookie 为依据)              | 一台电脑终端为一个访客                          |
| IP(Internet Protocol)——独立 IP 数   | 是指 1 天内多少个独立的 IP 浏览了页面                        | 统计不同的 IP 浏览用户数量。                    |







