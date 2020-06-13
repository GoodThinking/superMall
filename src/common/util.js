/*
防抖函数,短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行
*/
export function debounce(func,delay){
  let timer = null

  return function(...args){
    if(timer) clearTimeout(timer)

    timer = setTimeout(()=>{
      func.apply(this, args)
    },delay)
  }
}

//对Date进行格式化，转成时间
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};