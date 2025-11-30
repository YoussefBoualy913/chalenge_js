const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];
const extretemploye=document.getElementById('extretemploye');
const modifierobjet=document.getElementById('modifierobjet');
const contenaire=document.querySelector('.contenaire');

  Object.freeze(employees[0]);
  
  
    const element=document.createElement('li');
    element.textContent=employees[0].name+"  object is now frozen";
    extretemploye.append(element);

modifierobjet.addEventListener('click',()=>{
   contenaire.style.display='none';
const errur=document.getElementById('errur')
errur.textContent="Error: Cannot modify frozen object";
errur.style.color='red';

})

