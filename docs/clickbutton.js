function clickbutton() {
  scale.style.cssText = "background-color: transparent;";
  html2canvas(document.getElementById('father')).then(function (canvas) {
      document.body.appendChild(canvas);
  });
  scale.style.cssText = "background-color: rgb(122, 191, 238);";
  fa.style.cssText = "background-image: url(" + backgroundimage.src + "); width: 1px; height:1px;";
  box.style.cssText = "width: 1px; height:1px;";
  alert("生成成功，请右键保存");
}

var backgroundimage = new Image();
backgroundimage.onload = function () {
  fa.style.cssText = "background-image: url(" + backgroundimage.src + "); width: " + backgroundimage
      .width + "px; height:" + backgroundimage.height + "px;";

  box.style.cssText = "width: 320px; height:80px;";
};