let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelector(".calcular");
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modalCont")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modalClose");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modalClose");

    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900)
});



