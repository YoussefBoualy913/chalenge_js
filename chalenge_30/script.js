
const employees1 = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];
const employees2 = [
    {id: 6,name: "ali",role: "devlopper",salaire: 45000,city:"casa",active:true,hireDate:"2025-6-8"},
    {id: 7,name: "iman",role: "conduire",salaire: 9000,city:"raba",active:false,hireDate:"2025-2-5"},
    
];


const concatemployee=employees1.concat(employees2);

function showworkers(work){
if(work.length!=0){
const concateworkers=document.getElementById('concateworkers');



work.forEach(emp=>{
    const element=document.createElement('li');
    element.textContent=emp.name
    concateworkers.append(element);

})}else{
    window.alert("no worker");
}
}
showworkers(concatemployee);


