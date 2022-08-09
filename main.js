const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      openUl = body.querySelectorAll(".sidebar-link>li>.icon-link"),
      Li= body.querySelectorAll(".sidebar-link>li"),
      main=body.querySelector(".main");
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
});
toggle.addEventListener("click" , () =>{
    main.classList.toggle("close1");
});

/* searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
}) */

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

for(var i=0;i<openUl.length;i++)
{
    let child = Li[i].children[1];
    openUl[i].addEventListener("click",()=>{
        child.classList.toggle("open");
    })
}

const productContainers = [...document.querySelectorAll('.slider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})