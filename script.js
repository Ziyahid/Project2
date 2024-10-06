
const random=(color)=>{
    return Math.floor(Math.random()*color.length)
}

const color=["Red","Plum","Purple","Green","White"];
const click=document.getElementById("click")
const colors=document.querySelector(".colors");
const bg=document.getElementsByTagName("Body")[0];

click.addEventListener("click",()=>{
    let randomIndex=random(color)
    bg.style.backgroundColor=color[randomIndex];
    colors.textContent=  color[randomIndex];
})