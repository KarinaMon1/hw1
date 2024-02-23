var flag = false;

const light1 = document.querySelector('#light-red');
const light2 = document.querySelector('#light-yellow');
const light3 = document.querySelector('#light-green');
var green = false;   
var yellow = false; 
var red = false;

light1.disabled = true;
light2.disabled = true;
light3.disabled = true;

btn.addEventListener('click',()=>{
    if(flag == false){
        flag= true;
        btn.innerText='ON';
        light1.disabled = false;
        light2.disabled = false;
        light3.disabled = false;
    }
    else if(flag == true){
        flagd = false;
        btn.innerText='OFF';
        light1.disabled = true;
        light2.disabled = true;
        light3.disabled = true;
        light1.style.backgroundColor = 'white';
        light2.style.backgroundColor = 'white';
        light3.style.backgroundColor = 'white';
    }
});

light1.addEventListener('click', ()=>{
    if(red == false)
    {
        light1.style.backgroundColor = 'red';
        red = true;
    }
    else{
        red = false;
        light1.style.backgroundColor = 'white';
    }
});
light2.addEventListener('click', ()=>{
    if(yellow == false)
    {
        light2.style.backgroundColor = 'yellow';
        yellow = true;
    }
    else{
        yellow = false;
        light2.style.backgroundColor = 'white';
    }
});
light3.addEventListener('click', ()=>{
    if(green == false)
    {
        light3.style.backgroundColor = 'green';
        green = true;
    }
    else{
        green = false;
        light3.style.backgroundColor = 'white';
    }
});