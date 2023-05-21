var hour = 07;
var minutes = 24;
var second = 39;

var downloadTimer = setInterval(function(){
  if(second <= 0){
    second = 60;
    minutes--;
    setInterval(downloadTimer);
  } else {
    document.getElementById("countDown").innerHTML = '0' + hour + ' : ' + minutes + ' : ' + second;
  }
  if (minutes == 0) {
    hour--;
    minutes = 60;
    setInterval(downloadTimer);
  }
  second--;
}, 1000);