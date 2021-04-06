let images = ["timinou0.jpg", "timinou1.jpg", "timinou2.jpg","timinou3.jpg", "timinou4.jpg"];
let img = document.getElementById('picture');

function catColor(){
    let counter = 0;
    function changeImage(){
    	counter++;
        if(counter == images.length){
        	counter = 0;
        }  
        img.src = images[counter];
    }
    t=setInterval(changeImage, 100);
}

function stopCatColor(){
    clearInterval(t);
    img.src = images[1];    
}

picture.addEventListener('mouseover', catColor);
picture.addEventListener('mouseout', stopCatColor);


let images1 = ["timinouMoy0.jpg", "timinouMoy1.jpg"];
let img1 = document.getElementById('picture1');

function catColor1(){
    let counter1 = 0;
    function changeImage1(){
    	counter1++;
        if(counter1 == images1.length){
        	counter1 = 0;
        }  
        img1.src = images1[counter1];
    }
    t1=setInterval(changeImage1, 100);
}

function stopCatColor1(){
    clearInterval(t1);
    img1.src = images1[1];    
}

picture1.addEventListener('mouseover', catColor1);
picture1.addEventListener('mouseout', stopCatColor1);


let images2 = ["timinouPetit0.jpg", "timinouPetit1.jpg"];
let img2 = document.getElementById('picture2');

function catColor2(){
    let counter2 = 0;
    function changeImage2(){
    	counter2++;
        if(counter2 == images2.length){
        	counter2 = 0;
        }  
        img2.src = images2[counter2];
    }
    t2=setInterval(changeImage2, 100);
}

function stopCatColor2(){
    clearInterval(t2);
    img2.src = images2[1];    
}

picture2.addEventListener('mouseover', catColor2);
picture2.addEventListener('mouseout', stopCatColor2);



