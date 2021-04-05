let btnOpen = document.getElementById('btnInterview');
let all = document.getElementById('allInterview');
let btnClose = document.getElementById('btnInterviewClose');

btnOpen.addEventListener('click', openInterview);
btnClose.addEventListener('click', closeInterview);

function openInterview(){
    all.style.display = 'block';
}

function closeInterview(){
    all.style.display = 'none';
}

