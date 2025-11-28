
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];




function showworkers(work){
if(work.length!=0){
const tableworkers=document.getElementById('tableworkers');
const tablehaed=document.createElement('tr');
tableworkers.innerHTML='';
tablehaed.innerHTML=`
<th id="name">Name ▼</th>
<th>role</th>
<th id="salaire">Name ▼</th>
`
tableworkers.append(tablehaed);
work.forEach(emp=>{
    const tabletd=document.createElement('tr');
    tabletd.innerHTML=`
    <td>${emp.name}</td>
    <td>${emp.role}</td>
    <td>$${emp.salaire}</td>
    `
    tableworkers.append(tabletd);

})}else{
    window.alert("no worker");
}
}
showworkers(employees);
function ajouterevent(){
const salaire=document.querySelector('#salaire');
salaire.addEventListener('click',()=>{
    
    const salairesort=employees.sort((a,b)=>b.salaire-a.salaire);
    showworkers(salairesort);
    ajouterevent();
    window.alert("soeted by salaire");
})
const namesort=document.querySelector('#name');

namesort.addEventListener('click',()=>{
    const namesort=employees.sort((a,b)=>a.name.localeCompare(b.name));
    showworkers(namesort);
    ajouterevent();
     window.alert("soeted by name");
})
}
ajouterevent();

