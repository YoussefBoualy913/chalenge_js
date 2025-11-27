const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 7000,email: "ahmed.mansouri@example.com",telephone: "+212600000001"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,email: "sara.benali@example.com",telephone: "+212600000002"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 10000,email: "youssef.amrani@example.com",telephone: "+212600000003"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,email: "khadija.berrada@example.com",telephone: "+212600000004"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,email: "omar.essafi@example.com",telephone: "+212600000005"}
];

const btnrole=document.querySelector('.btn');
btnrole.addEventListener('click',()=>{

    employees.forEach(employe => {
         if(employe.id==4)
           window.alert("Employee Role:"+employe.role);
    });
})