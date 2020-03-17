var centerx = 0; //圆心X
var centery = 80; //圆心Y
var r = 60; //半径
var oimages = document.getElementById("div1").getElementsByTagName("IMG"); //图片集合
var cnt = oimages.length; //图片数
var da = 360 / cnt; //图片间隔角度
var a0 = 0; //已旋转角度
var timer;
for (var i = 0; i < cnt; i++) {
  oimages[i].onmouseover = stop;
  oimages[i].onmouseout = start;
}
function posimgs() {
  for (var i = 0; i < cnt; i++) {
    oimages[i].style.left = centerx + r * Math.cos((da * i + a0) / 180 * Math.PI) + "px";
    oimages[i].style.top = centery + r * Math.sin((da * i + a0) / 180 * Math.PI) + "px";
  }
}
// posimgs();
function start() {
  timer = window.setInterval("posimgs();a0++;", 100);
}
function stop() {
  window.clearInterval(timer);
}
start();