let body = document.body;
let layer = document.getElementById('layer');
let circle = document.getElementById('circle');
let flag = 0;

function toggle() {
    if(flag == 0){
        body.style.backgroundColor = 'black';
        circle.style.translate = '1rem';
        circle.style.backgroundColor = 'white';
        circle.style.borderColor = 'white';
        flag = 1;
    }
    else {
        body.style.backgroundColor = 'rgb(236, 236, 236)';
        circle.style.translate = '0rem';
        circle.style.backgroundColor = 'black';
        circle.style.borderColor = 'white';
        flag = 0;
    }
}

layer.addEventListener('click', toggle);