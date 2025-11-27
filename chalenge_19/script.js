
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",active:true,hireDate:"2025-3-4"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",active:false,hireDate:"2025-2-5"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",active:true,hireDate:"2025-6-2"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",active:false,hireDate:"2025-3-6"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",active:true,hireDate:"2025-6-4"}
];

showemployee(employees);
function showemployee(emp){
const elmployeelist=document.getElementById('elmployeelist');
elmployeelist.textContent=''
employees.forEach(employe => {
    const element=document.createElement('li');
    element.style.listStyle='none'
    element.innerHTML=` <span>${employe.name}</span><button onclick="dellet(this)">Delete</button>`;
    elmployeelist.append(element);

    })
}
    function dellet(eployee){
       
        const namedell=eployee.previousElementSibling.textContent;
        console.log(namedell);
         const index = employees.findIndex(em=> em.name ==namedell);
       employees.splice(index,1)
           showemployee(employees);
    
       }
