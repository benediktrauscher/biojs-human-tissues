module.exports = class EasyTip{

  constructor(div){
    const el = document.createElement("div");

    //add to body
    this.el = el;
    div.appendChild(this.el);
    this.showTip = false; // for toggle Mode

    //set styles
    this.resetStyles();
  }

  show(evt){
    //move div to mouse position and display
    let left, top;
    let e = evt || window.event
    left  = e.clientX + 20 + "px";
    top  = e.clientY - 20 + "px";
    this.el.style.left = left;
    this.el.style.top = top;
    this.el.style.display = "block";
  }

  hide(){
    //simply hide div
    this.el.style.display = "none";
  }

  toggle(evt){
    // toggles between showing and not showing the tooltip
    if(this.showTip){
      this.showTip = false;
      this.hide();
    }else{
      this.showTip = true;
      this.show(evt)
    }
  }

  content(cont){
    //cont can be html string for advanced tooltips
    this.el.innerHTML = cont;
  }

  setStyle(attr, val){
    this.el.style[attr] = val;
  }

  resetStyles(){
    let el = this.el;

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

  isOn(){
    let isOn = this.el.style.display === "block" ?
      true : false;
    return isOn;
  }
}
