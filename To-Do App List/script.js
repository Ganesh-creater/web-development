const input = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(input.value === '') {
        alert('Enter any text to add the task');
    }else {
        let li = document.createElement("li");
        li.innerHTML = `${input.value} `;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value='';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check');
        saveData();
    }else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addTask();
        saveData();
    }
});

const saveData = function() {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showData = function() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();