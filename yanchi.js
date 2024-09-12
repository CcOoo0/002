let url = $request.url;
if (url.indexOf("nj.cschannel.anticheatexpert.com") !== -1) {
    // 当检测到 nj.cschannel.anticheatexpert.com 的请求时，修改策略，放行 down.anticheatexpert.com
    $policy.update("reject-group", "direct");
}
$done({});
