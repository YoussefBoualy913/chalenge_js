
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];




function shownameemplyoe(empl){
    const employee=document.getElementById('employee')
  
empl.forEach(employe => {
    if(employe.id==1){
    const proprieter=  Object.entries(employe);
    console.log(proprieter);
    

    proprieter.forEach(pro=>{

   
    const elementr=document.createElement('tr');
    const elementh=document.createElement('th');
    const elementd=document.createElement('td');
    elementh.textContent=pro[0];
    elementd.textContent=pro[1];
    elementr.append(elementh);
    elementr.append(elementd);
    employee.append(elementr);

 })
    }
    })

}
shownameemplyoe(employees);







