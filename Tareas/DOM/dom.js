/* Mostrar el Número de Artículos que existen en el Documento. */
let articulos = document.querySelectorAll('p');
console.log(articulos);

/* Identificar líneas divisorias dentro del Documento y número de líneas.. */

let lineaD = document.querySelectorAll('hr');
console.log(lineaD);

/* Identificar los elementos de lista dentro del Documento y número de elementos en total. */
let lista = document.querySelectorAll('li');
console.log(lista);

/* Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista. */

let listaE = document.querySelectorAll('li a');
console.log(listaE);

/* Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista. */

let Menu = document.querySelectorAll('nav.menu li');
console.log(Menu);

/* Identificar imágenes dentro del Documento y número de imágenes en total. */

let img = document.querySelectorAll('figure');
console.log(img);

/* Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque. */
let imge = document.querySelectorAll('figure')[0];
console.log(imge);

/* Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente
bloque.*/

let imgen = document.querySelector('#imgAr3');
console.log(imgen);

/* Identificar enlaces del Documento y número de enlaces en total. */

let refe = document.querySelectorAll('a');
console.log(refe);

/* Identificar enlaces del Documento y número de enlaces en total. */

let refe1 = document.querySelectorAll('a');
console.log(refe1);

/*Identificar enlaces distribuidos dentro del párrafo referente al “Artículo
1” y número de enlaces. */

let refe2 = document.querySelectorAll('div li a.art2');
console.log(refe2);
