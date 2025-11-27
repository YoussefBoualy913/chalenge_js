
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];



function showemployee(emp){
  
    
const elmployeemodifier=document.getElementById('elmployeemodifier');
elmployeemodifier.style.listStyle='none';
elmployeemodifier.textContent='';
if(emp.length!=0){
emp.forEach(element => {
    const empname=document.createElement('li');
    empname.textContent=element.name+"-"+element.role;
    elmployeemodifier.append(empname);
    
});
}else{
  const empname=document.createElement('li');
    empname.textContent="No results found "
    elmployeemodifier.append(empname);
}

}
showemployee(employees);
const input=document.getElementById('serch');
input.addEventListener('input',()=>{
    const serch=employees.filter(emp=> emp.name.toLowerCase().includes(input.value.toLowerCase()) || emp.role.toLowerCase().includes(input.value.toLowerCase()))
    showemployee(serch)
})