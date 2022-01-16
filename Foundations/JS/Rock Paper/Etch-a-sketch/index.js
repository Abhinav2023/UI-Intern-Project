let row=prompt("Please enter number of rows",16);
let column=prompt("Please enter number of columns",16);

console.log(row);
console.log(column);
var div=document.createElement("div");
div.addEventListener("mouseover",function(){
        console.log("Change Background");
        div.classList.add('hoverEffect');
},false);
div.classList.add("mystyle");
div.style.border="1px solid black";

var rowDiv=document.createElement("div");
rowDiv.classList.add("row");
for(let i=0;i<column;i++){
        rowDiv.appendChild(div.cloneNode(true));
}
let element=document.querySelector('.content');
for(let i=0;i<row;i++){
        element.appendChild(rowDiv.cloneNode(true));
}
