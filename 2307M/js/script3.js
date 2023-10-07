window.onload=function(){
    int();
}
//DOM: Document object model
function int(){
    document.getElementById("magic").onmouseover=function(){
        this.className="highlight";
    }
    document.getElementById("magic").onmouseout=function(){
        this.className="";
    }
}