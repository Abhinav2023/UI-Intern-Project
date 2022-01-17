let firstNumber='',
    secondNumber='',
    currentOperation=null,
    toggleNumber=false;


let $numbers=document.querySelectorAll('[data-number]'),
    $operations=document.querySelectorAll('[data-operator]'),
    $clearButton=document.querySelector('.calculator-clear'),
    $deleteButton=document.querySelector('.calculator-delete'),
    $displayScreen=document.querySelector('.calculator-screen');

$clearButton.addEventListener('click', clearScreen);
$deleteButton.addEventListener('click',deleteInput);

$numbers.forEach(number=>{
        number.addEventListener('click',()=>appendNumber(number.textContent));
})

$operations.forEach(operation=>{
        operation.addEventListener('click',()=> appendOperation(operation.textContent));
})


function appendNumber(number){
        if($displayScreen.textContent==='0' || toggleNumber){
                $displayScreen.textContent='';
                toggleNumber=false;
        }
        $displayScreen.textContent+=number;
}

function appendOperation(operation){
        if(operation==='.'){
                appendPoint();
        }else if(operation==='='){
                evaluate();
                toggleNumber=true;
        }else if(operation==='%'){
                $displayScreen.textContent=($displayScreen.textContent/100).toFixed(3);
        }
        else{
                performOperation(operation);
                toggleNumber=true;
        }
}

function performOperation(operator){
        if(currentOperation!==null) evaluate();
        firstNumber=$displayScreen.textContent;
        currentOperation=operator;
        
}

function evaluate(){
        secondNumber=$displayScreen.textContent;
        if(currentOperation==='/' && $displayScreen.textContent==='0'){
                alert("Divide by 0 not possible");
                clearScreen();
                return ;
        }
        $displayScreen.textContent=findResult(firstNumber,secondNumber,currentOperation).toFixed(3);
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
        if($displayScreen.textContent===''){
                $displayScreen.textContent+='0';
        }
        $displayScreen.textContent+='.';
}

function clearScreen(){
        $displayScreen.textContent='0';
        firstNumber='';
        secondNumber='';
        currentOperation=null;
}       

function deleteInput(){
        $displayScreen.textContent=$displayScreen.textContent.toString().slice(0,-1);
        if($displayScreen.textContent===''){
                $displayScreen.textContent='0';
        }
}