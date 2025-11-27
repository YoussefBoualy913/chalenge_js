
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];
let conter=employees.length+1;

console.log(employees);


const form=document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=form.querySelector('#name');
    const role=form.querySelector('#role');
    const salaire=form.querySelector('#salaire');
    const city=form.querySelector('#city');
    const active=form.querySelector('#active');
    const hireDate=form.querySelector('#hireDate');
    const employe={
        id:conter,
        name:name.value,
        role:role.value,
        salaire:salaire.value,
        city:city.value,
        active:active.value,
        hireDate:hireDate.value,
      
    }
employees.push(employe)
   
console.log(employees);
})








