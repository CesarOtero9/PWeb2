const icono = document.querySelector('.menu');
const menu = document.querySelector('.menuNavegacion');

console.log(menu)
console.log(icono)

icono.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})