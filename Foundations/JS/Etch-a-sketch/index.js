let row=prompt("Please enter number of rows",16);
let column=prompt("Please enter number of columns",16);

let $gridItem = document.createElement("div");
$gridItem.className="grid-item";

function gridItemMouseOverHandler(){
        console.log("Change Background");
        this.classList.add('grid-item__hover');
}

function createRowAndColumn(){
        let $grid=document.querySelector('.content');
        for(let i=0;i<row;i++){
                let $gridRow=document.createElement("div");
                $gridRow.classList.add("grid-row");
                for(let i=0;i<column;i++){
                        let $clone=$gridItem.cloneNode(true);
                        $clone.addEventListener('mouseover',gridItemMouseOverHandler);
                        $gridRow.appendChild($clone);
                }
                $grid.appendChild($gridRow);
        }
}

createRowAndColumn();