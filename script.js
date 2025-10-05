console.log("script.js initializing");

let boxes = document.body.querySelector(".job-container-1_1").children;

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 =  Math.ceil(0 + Math.random()* 255);
    let val3 =  Math.ceil(0 + Math.random()* 255);

    return `rgb(${val1} , ${val2} , ${val3})`
}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor();
   // e.style.color = getRandomColor();
})
 // 1. Get the elements
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // 2. Add click event listener to the hamburger icon
    menuToggle.addEventListener('click', () => {
        // Toggle the 'open' class on the menu
        navMenu.classList.toggle('open');
        
        // Optionally, toggle a class on the icon itself for animation
        menuToggle.classList.toggle('is-active'); 
    });