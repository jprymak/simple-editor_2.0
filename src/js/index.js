import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

const saveBtn = document.querySelector('.editor__save-button--js')
const loadBtn = document.querySelector('.editor__load-button--js')
let textArea = document.querySelector('.editor__textarea--js')


saveBtn.addEventListener('click', ()=>{
    
    localStorage.setItem('1', textArea.value);
})

loadBtn.addEventListener('click', ()=>{
    
    textArea.value = localStorage.getItem('1');
    
})