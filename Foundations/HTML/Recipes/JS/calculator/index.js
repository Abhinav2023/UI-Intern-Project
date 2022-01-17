let firstNumber='',
    secondNumber='',
    currentOperation=null;

let numbers=document.querySelectorAll('[data-number]');
let operations=document.querySelectorAll('[data-operator]');
let clearButton=document.querySelector('.btn-red');
let deleteButton=document.querySelector('.btn-purple');
let screen=document.querySelector('.screen');

clearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click',deleteInput);

numbers.forEach(number=>{
        number.addEventListener('click',()=>appendNumber(number.textContent));
})

operations.forEach(operation=>{
        operation.addEventListener('click',()=> appendOperation(operation.textContent));
})


function appendNumber(number){
        if(screen.textContent==='0'){
                screen.textContent='';
        }
        screen.textContent+=number;
}

function appendOperation(operation){
        if(operation==='.'){
                appendPoint();
        }else if(operation==='='){
                equalsOperation();
        }else{
                equalsOperation(operation);
        }
}

function equalsOperation(operator){
        if(currentOperation!==null) evaluate();
        firstNumber=screen.textContent;
        currentOperation=operator;
        screen.textContent='';
}

function evaluate(){
        secondNumber=screen.textContent;
        document.querySelector('.screen').textContent='ihbd';
        // document.querySelector('.screen').textContent=findResult(firstNumber,secondNumber,currentOperation);
        console.log(findResult(firstNumber,secondNumber,currentOperation))
        currentOperation=null;
}

function findResult(a,b,operator){
        a=Number(a);
        b=Number(b);
        switch (operator){
                case '+':
                        return a+b;
                case '-':
                        return a-b;
                case '*':
                        return a*b;
                case '/':
                        return a/b;
        }
}

function appendPoint(){
        if(screen.textContent===''){
                screen.textContent+='0';
        }
        screen.textContent+='.';
}

function clearScreen(){
        screen.textContent='0';
        firstNumber='';
        secondNumber='';
        currentOperation=null;
}       

function deleteInput(){
        screen.textContent=screen.textContent.toString().slice(0,-1);
}