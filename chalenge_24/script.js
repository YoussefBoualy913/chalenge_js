
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 36000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"nice",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 45000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 33000,city:"paris",active:true,hireDate:"2025-6-4"}
];



const isnonactive=employees.every(emp=>emp.salaire>30000);

if(isnonactive){
    const warning=document.getElementById('elmployeeern');
    const info=document.createElement('p');
    warning.append(info);
    
    warning.children[0].textContent="✓ All employees earn more than $30,000";
}