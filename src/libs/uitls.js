function  _addZero(value) {
    return value < 10 ? ('0'+value) : value; 
}
function formatDateTime(timeStamp){
    const data = new Date(timeStamp);

    const y = data.getFullYear(),
          m = data.getMonth() + 1,
          d = data.getDate(),
          h = _addZero(data.getHours()),
          i = _addZero(data.getMinutes()),
          s = _addZero(data.getSeconds());
    return `${y}年${m}月${d}日 ${h}:${i}:${s}`
}
function stopBubble(e) {
    if (e && e.stopPropagation)
    //因此它支持W3C的stopPropagation()方法 
        e.stopPropagation();
    else
    //否则，我们需要使用IE的方式来取消事件冒泡 
        window.event.cancelBubble = true;
}
export {
    formatDateTime,
    stopBubble
}