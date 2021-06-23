
const buttonNext = document.querySelector("#button-next");
const buttonBack = document.querySelector("#button-back");
const slider = document.querySelector("#slider");
const curentStyle = getComputedStyle(slider);


console.log(curentStyle.right);

buttonNext.addEventListener('click', event =>{
  event.preventDefault();
  
  let currentPosition = (parseInt(curentStyle.right));
  
  if (currentPosition<500){
    
    slider.style.right = `${currentPosition+100}px`;
    
  }
});



buttonBack.addEventListener('click', event => {
  event.preventDefault();
  
  let currentPosition = (parseInt(curentStyle.right));
  
  if (currentPosition>0){
    
    slider.style.right = `${currentPosition-100}px`;
    
  }
});
