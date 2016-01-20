var EasyTip = module.exports = function(div){
  var el = document.createElement("div");

  //add to body
  this.el = el;
  div.appendChild(this.el);

  //set styles
  this.resetStyles();
}

EasyTip.prototype.show = function(evt){
  //move div to mouse position and display
  var left, top;
  var e = evt || window.event
  left  = e.clientX + 20 + "px";
  top  = e.clientY - 20 + "px";
  this.el.style.left = left;
  this.el.style.top = top;
  this.el.style.display = "block";
}

EasyTip.prototype.hide = function(){
  //simply hide div
  this.el.style.display = "none";
}

EasyTip.prototype.content = function(cont){
  //cont can be html string for advanced tooltips
  this.el.innerHTML = cont;
}

EasyTip.prototype.setStyle = function(attr, val){
  this.el.style[attr] = val;
}

EasyTip.prototype.resetStyles = function(){
  var el = this.el;

  el.style.position = "fixed";
  el.style.backgroundColor = "#fff";
  el.style.textAlign = "center";
  el.style.display = "none";
  el.style.border = "1px solid #999";
  el.style.color = "#444";
  el.style.overflow = "auto";
  el.style.zIndex = 1002;
  el.style.padding = "10px";
  el.style.borderRadius = "1px";
}

EasyTip.prototype.isOn = function(){
  var isOn = this.el.style.display === "block" ?
            true : false;
  return isOn;
}
