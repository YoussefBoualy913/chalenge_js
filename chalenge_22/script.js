
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"nice",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];

console.log(employees);

const namesemployee=employees.reduce((ac,emp)=>{
    const  group=emp.city;
    
    if(!ac[group]){
        ac[group]=[];  
    }
     ac[group].push(emp);
     return ac;
},{});

console.log(namesemployee);

const elmployeesalairDlist=document.getElementById('elmployeesalairDlist');

for(emp in namesemployee){
    const elementcity=document.createElement('li');
     elementcity.style.color="blue"
    elementcity.textContent=emp;
    elmployeesalairDlist.append(elementcity);
    namesemployee[emp].forEach(employe =>{
        const elementname=document.createElement('li');
        elmployeesalairDlist.style.listStyle='none'
        elementname.textContent=employe.name;
        elmployeesalairDlist.append(elementname);
    })
     
    
}
