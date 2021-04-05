mylogo.addEventListener('mouseover', changeColor1);
mylogo.addEventListener('mouseout', changeColor2);
mylogo.addEventListener('mouseover', changeColor3);
mylogo.addEventListener('mouseout', changeColor4);

function changeColor1(){
    circle1.style.borderColor = 'blue';
    circle2.style.borderColor = 'green';
    circle3.style.borderColor = 'green';
    circle4.style.borderColor = 'red';
    circle5.style.borderColor = 'red';
}


function changeColor2(){
    circle1.style.borderColor = 'rgb(71, 71, 92)';
    circle2.style.borderColor = 'rgb(61, 70, 61)';
    circle3.style.borderColor = 'rgb(61, 70, 61)';
    circle4.style.borderColor = 'rgb(92, 81, 81)';
    circle5.style.borderColor = 'rgb(92, 81, 81)';
}


 function changeColor3(){
    circle1bis.style.borderColor = 'blue';
    circle2bis.style.borderColor = 'green';
    circle3bis.style.borderColor = 'green';
    circle4bis.style.borderColor = 'red';
    circle5bis.style.borderColor = 'red';
}


function changeColor4(){
    circle1bis.style.borderColor = 'rgb(71, 71, 92)';
    circle2bis.style.borderColor = 'rgb(61, 70, 61)';
    circle3bis.style.borderColor = 'rgb(61, 70, 61)';
    circle4bis.style.borderColor = 'rgb(92, 81, 81)';
    circle5bis.style.borderColor = 'rgb(92, 81, 81)';
}

 
mylogo.addEventListener('click', animer);
mylogo.addEventListener('click', animerbis);

let ang = 0;
function animer(){
    let t = setTimeout('animer()', 10);
    let elem = document.getElementById("circle1");
    ang += 15;
    if (ang<3600){
        elem.style.transform = "rotateY("+ang+"deg)";
    }else{
        clearTimeout(t);
        ang = 0;
    }   
}


let angbis = 0;
function animerbis(){
    let tbis = setTimeout('animerbis()', 10);
    let elembis = document.getElementById("circle1bis");
    angbis += 15;
    if (angbis<3600){
        elembis.style.transform = "rotateY("+angbis+"deg)";
    }else{
        clearTimeout(tbis);
        angbis = 0;
    }   
}


            
    

