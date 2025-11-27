
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];

console.log(employees);
const modifieremployee=structuredClone(employees);
modifieremployee[0].salaire=50000;
console.log(modifieremployee);

const originale=document.getElementById('originale');
const modified=document.getElementById('modified');
const elmployeemodifier=document.getElementById('elmployeemodifier');
elmployeemodifier.style.listStyle='none';
originale.textContent="Original salary: $"+employees[0].salaire;
modified.textContent="Deep cloned & modified: $"+modifieremployee[0].salaire;
modified.style.color='green';
