

const inpt=document.querySelector('#inpt');
const red=document.querySelector('#red');

inpt.addEventListener('input',()=>{
    const info=document.querySelector('#info');
    info.style.display="none";
    const redinfo=document.querySelector('#redinfo');
    redinfo.textContent="Input value:"+inpt.value;


})
red.addEventListener('input',()=>{

  inpt.value=red.value;
  red.value='';
})