
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];

console.log(employees);
const namesemployee=employees.map(emp=>({...emp,salaire:emp.salaire+emp.salaire*0.1}));
console.log(namesemployee);

const elmployeesalairDlist=document.getElementById('elmployeesalairDlist');

namesemployee.forEach(employe =>{
    const element=document.createElement('li');
    element.style.listStyle='none'
    element.textContent=employe.name+":$"+employe.salaire;
    elmployeesalairDlist.append(element);
})