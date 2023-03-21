let contextMenu = document.querySelector(".contextMenu");

function menu(show = true){
    contextMenu.style.display=show ? "block" : "none";
}

window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    menu();
    const topPx=e.y + contextMenu.offsetHeight > window.innerHeight? window.innerHeight - contextMenu.offsetHeight : e.y;
    const leftpx=e.x + contextMenu.offsetWidth > window.innerWidth? window.innerWidth - contextMenu.offsetWidth : e.x;
    contextMenu.style.top=topPx+"px";
    contextMenu.style.left=leftpx+"px";

});

window.addEventListener("click",(e)=>{
    menu(false);
});

