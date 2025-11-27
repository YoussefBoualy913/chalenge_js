const titleupdate=document.querySelector('.titleupdate');


titleupdate.children[1].addEventListener('click',()=>{
    console.log("hhh");
    
    titleupdate.style.display='none';
    const span=document.getElementById('span');
    span.textContent="titl will update..."
    setTimeout(()=>{
 span.textContent="✓ Personnel List Updated!"

    
},2000)
})