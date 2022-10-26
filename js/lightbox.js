const imagen = document.querySelectorAll('.imgGaleria');
const imagenesLight= document.querySelector('.agregarImagen');
const contenedorLight = document.querySelector('.imagenLight');
const icono1 = document.querySelector('.menu');


console.log(imagen)
console.log(imagenesLight)
console.log(contenedorLight)

imagen.forEach(imagenes =>{
    imagenes.addEventListener('click', () =>{
            aparecerImagen(imagenes.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        icono1.style.opacity = '1'
    }
})

const aparecerImagen = (imagenes)=>{
    imagenesLight.src = imagenes
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    icono1.style.opacity = '0'
    
}