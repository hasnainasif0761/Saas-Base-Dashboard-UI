function toggle(){
    var ham = document.querySelector('.sidebar-container');
    ham.classList.toggle('activeHam');
}

 const tabs = document.querySelectorAll(".tab");

 tabs.forEach(event=>{
    event.addEventListener('click',()=>{
        tabs.forEach(inner_Tab => inner_Tab.classList.remove('active'));
        event.classList.add('active')
    })
 })