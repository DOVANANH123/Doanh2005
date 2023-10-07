window.onload = int;

function int(){
    document.getElementById("btn1").onclick = changeHeading1;
    document.getElementById("btn2").onclick = changeHeading2;
    document.getElementById("btn3").onclick = changeParagraph;
}
function changeHeading1(){
    const elm =document.getElementById("heading1");
    elm.textContent="Hello";
    //Create new element
    // document.write("<p>Hello new p  tag</p>");
    const newElm = document.createElement('p');
    newElm.textContent="Hello new P"
    elm.after(newElm);
    console.log(elm);
}
function changeHeading2(){
    const elms = document.getElementsByTagName("h2");//Array of Elements
    for(const elm of elms){
    elm.textContent="Change h2 to everything";
}
console.log(elms);
}
function changeParagraph(){
    const elms = document.getElementsByClassName('para');//Array of Elements
    for(const elm of elms){
     elm.textContent="Hello again";
    }
}