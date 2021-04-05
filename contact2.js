let btnContact = document.getElementById('btnContact');
let allContact = document.getElementById('allContact');
let btnContactClose = document.getElementById('btnContactClose');
let txt = document.getElementById('txt');


btnContact.addEventListener('click', openContact);
btnContactClose.addEventListener('click', closeContact);

function openContact(){
    allContact.style.display = 'block';
    txt.style.display = 'none';
}

function closeContact(){
    allContact.style.display = 'none';
    txt.style.display = 'block';
}