
const employees = [
    {id: 1,name: "Ahmed El Mansouri",role: "Réceptionniste",salaire: 60000,city:"paris",email: "ahmed.mansouri@example.com",telephone: "+212600000001"},
    {id: 2,name: "Sara Benali",role: "Technicien IT",salaire: 8000,city:"nice",email: "sara.benali@example.com",telephone: "+212600000002"},
    {id: 3,name: "Youssef Amrani",role: "Manager",salaire: 51000,city:"paris",email: "youssef.amrani@example.com",telephone: "+212600000003"},
    {id: 4,name: "Khadija Berrada",role: "Agent de sécurité",salaire: 4000,city:"raba",email: "khadija.berrada@example.com",telephone: "+212600000004"},
    {id: 5,name: "Omar Essafi",role: "Nettoyage",salaire: 3000,city:"paris",email: "omar.essafi@example.com",telephone: "+212600000005"}
];

const clickindex=document.getElementById('clickindex')


const totalsalaire=employees.reduce((acu,el)=> acu+el.salaire,0);

clickindex.style.listStyle='none';
clickindex.firstChild.textContent="Total Salary: $"+totalsalaire;
