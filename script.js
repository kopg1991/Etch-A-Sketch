
let container = document.querySelector('.container');
let square ;
let button = document.querySelector('#reset')
let size = document.querySelector('#size');
size.value = 16;

createDiv();
function createDiv(){

    for (let i = 0; i < size.value; i++) {
        for (let j=0;j<size.value;j++){
          square = document.createElement('div'); 
          square.classList.add('blue')
          container.appendChild(square);
          
        }
    }

};

// Funcion de escojer cada div y anadirle un class nuevo
let divs = document.querySelectorAll('.blue'); 
    divs.forEach((divs) => divs.addEventListener('mouseover', (e) => {
    divs.classList.add('active');
}))

 button.addEventListener('click' , removeClass)

 function removeClass(){
   divs.forEach(divs => {
       divs.classList.remove('active');
   })
 }
 size.addEventListener('click', () =>{
     console.log('jo')
     let result = prompt('Which size you like: ');
    size.value= result;
    console.log(size.value);
     
 });

 console.log(size.value)