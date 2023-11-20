const displayElement = document.getElementById('display');
function disp(val) {
    displayElement.textContent += val;
}

let equal = document.getElementById('eval');
function result(){
    let a = eval(displayElement.textContent);
    displayElement.textContent = a;
}
equal.addEventListener('click', result);

let ac = document.getElementById('ac');
function clear(){
    displayElement.textContent = '';
}
ac.addEventListener('click', clear);

let del = document.getElementById('del');
function back(){
    let a = displayElement.textContent;
    a = a.slice(0, -1);
    displayElement.textContent = a;
}
del.addEventListener('click', back);