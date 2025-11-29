
const loadlocalstorage=document.getElementById('loadlocalstorage');
const nameemploye=document.getElementById('nameemploye');
const loadinfo=document.getElementById('loadinfo');

loadlocalstorage.addEventListener('click',()=>{
   const employe= JSON.parse(localStorage.getItem('employees'));
    loadlocalstorage.style.display='none';
    loadinfo.style.display='block'
   employe.forEach(emp=>{
    const element=document.createElement('li');
    element.textContent=emp.name
    nameemploye.append(element);

})

})