let mainImg = document.querySelector('.xzoom');
function changeImg(event) {
    return event.src == mainImg.src;
}

$('#zoom').elevateZoom();


let num = 1;
let numValue = document.getElementById('num');
let price = document.getElementById('price');
let zero = document.getElementById('zero');

zero.innerHTML = price.innerHTML;

document.querySelector('.max').onclick = ()=> {
    if (num < 10) {
        numValue.value = ++num;
        zero.innerHTML = price.innerHTML * numValue.value;
    }
}
document.querySelector('.min').onclick = ()=> {
    if (num != 1) {
        numValue.value = --num;
        zero.innerHTML = price.innerHTML * numValue.value;
    }
}
