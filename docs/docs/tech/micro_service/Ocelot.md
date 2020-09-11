# 微服务之Ocelot
## Ocelot

这里有一个配置示例。配置有两个部分。一系列路线和一个全局配置。路由是告诉Ocelot如何处理上游请求的对象。全局配置有点粗糙，允许覆盖特定于路由的设置。如果您不想管理大量特定于路由的设置，那么它非常有用。

{
    "Routes": [],
    "GlobalConfiguration": {}
}

{
          "DownstreamPathTemplate": "/",
          "UpstreamPathTemplate": "/",
          "UpstreamHttpMethod": [
              "Get"
          ],
          "DownstreamHttpMethod": "",
          "DownstreamHttpVersion": "",
          "AddHeadersToRequest": {},
          "AddClaimsToRequest": {},
          "RouteClaimsRequirement": {},
          "AddQueriesToRequest": {},
          "RequestIdKey": "",
          "FileCacheOptions": {
              "TtlSeconds": 0,
              "Region": ""
          },
          "RouteIsCaseSensitive": false,
          "ServiceName": "",
          "DownstreamScheme": "http",
          "DownstreamHostAndPorts": [
              {
                  "Host": "localhost",
                  "Port": 51876,
              }
          ],
          "QoSOptions": {
              "ExceptionsAllowedBeforeBreaking": 0,
              "DurationOfBreak": 0,
              "TimeoutValue": 0
          },
          "LoadBalancer": "",
          "RateLimitOptions": {
              "ClientWhitelist": [],
              "EnableRateLimiting": false,
              "Period": "",
              "PeriodTimespan": 0,
              "Limit": 0
          },
          "AuthenticationOptions": {
              "AuthenticationProviderKey": "",
              "AllowedScopes": []
          },
          "HttpHandlerOptions": {
              "AllowAutoRedirect": true,
              "UseCookieContainer": true,
              "UseTracing": true,
              "MaxConnectionsPerServer": 100
          },
          "DangerousAcceptAnyServerCertificateValidator": false
      }