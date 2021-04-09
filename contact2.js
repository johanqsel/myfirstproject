window.addEventListener('load', animer);

let ang = 0;
function animer(){
    let t = setTimeout('animer()', 30);
    let elem = document.getElementById("circle1");
    ang += 15;
    if (ang<3600){
        elem.style.transform = "rotateY("+ang+"deg)";
    }else{
        clearTimeout(t);
        ang = 0;
    }   
}




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