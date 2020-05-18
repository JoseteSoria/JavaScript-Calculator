var num1 = 0;
var num2 = 0;
var op = 0;

function number(number){
    if(num1==0 && num2 ==0 && op==2){
      num1= '-' + number;
      op=0;
    }else if(num1==0 && num1 !== '0.'){
        num1 = number;
    }else{
        num1 += number;
    }
    refresh();
}
function colon(){
    if(num1 == 0) {
        num1 = '0.';
    } else if(num1.indexOf('.') == -1) { /*there is no colon*/
        num1 += '.';
    }
    refresh();
}
function clean(){
    num1 = 0;
    num2 = 0;
    op = 0;
    refresh();
}
function operation(valor){
    if (num1 == 0){
        num2 = parseFloat(document.getElementById("displayR").value);
        if (Number.isNaN(num2)) num2=0;
    }
    else{
      equal();
    }
    op = valor;
}
function equal(){
    num1 = parseFloat(num1);
    switch (op){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
    }
    if (num1!=0){
      refresh();
      num2 = parseFloat(num1);
      num1 = 0;
      op=0;
    }
}

function refresh(){
    document.getElementById("displayR").value = num1;
}
