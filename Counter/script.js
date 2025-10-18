const count = document.querySelector('.count');
const reset = document.querySelector('.reset');
const num = document.querySelector('.num');
const minus = document.querySelector('.minus');

let number = 0;
function counter() {
    number++;
    num.textContent = number;
}

const resetBtn = function() {
    number = 0;
    num.textContent = number
}

count.addEventListener('click', function(){
    count.classList.add('anim');
});

count.classList.remove('anim');

minus.addEventListener('click', function() {
    
    if(number === 0) {
        num.textContent = 0;
    }else {
        number--;
        num.textContent = number;
    }  
});
