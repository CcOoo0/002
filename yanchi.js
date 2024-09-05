// 延迟函数
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

(async () => {
    // 延迟3分钟，即180000毫秒
    await delay(180000);  
    $done({});
})();