var valor = document.getElementById("input");

valor.addEventListener('keyup',convertir);

var txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("tipoEntrada");
unidad1.addEventListener('change',convertir);

unidad2 = document.getElementById("tipoResultado");
unidad2.addEventListener('change',convertir);



function convertir(){
    if(valor.value ==''){
        return;
    }

    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad1.value == "kilometro" && unidad2.value == "kilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Kilometro/s"
    }

    if(unidad1.value == "kilometro" && unidad2.value == "metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Metros/s"
    }
    if(unidad1.value == "kilometro" && unidad2.value == "centimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Centimetro/s"
    }

    if(unidad1.value == "kilometro" && unidad2.value == "yarda"){
        resultado = numero * 1093.61;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Yardas/s"
    }

    if(unidad1.value == "kilometro" && unidad2.value == "pie"){
        resultado = numero * 3280.84;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Pies/s"
    }

// metro
    
    if(unidad1.value == "metro" && unidad2.value == "metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " metro/s"
    }

    if(unidad1.value == "metro" && unidad2.value == "kilometro"){
        resultado = numero * 0.001;
        txtResultado.innerHTML = numero + " metro/s equivalen a " + resultado + " kilometro/s"
    }
    if(unidad1.value == "metro" && unidad2.value == "centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " metro/s equivalen a " + resultado + " Centimetro/s"
    }

    if(unidad1.value == "metro" && unidad2.value == "yarda"){
        resultado = numero * 1.09361;
        txtResultado.innerHTML = numero + " metro/s equivalen a " + resultado + " Yardas/s"
    }

    if(unidad1.value == "metro" && unidad2.value == "pie"){
        resultado = numero * 3.28084;
        txtResultado.innerHTML = numero + " metro/s equivalen a " + resultado + " Pies/s"
    }

// centimetro

if(unidad1.value == "centimetro" && unidad2.value == "metro"){
    resultado = numero * 0.01;
    txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " metro/s"
}

if(unidad1.value == "centimetro" && unidad2.value == "kilometro"){
    resultado = numero * 0.00001;
    txtResultado.innerHTML = numero + " centimetro/s equivalen a " + resultado + " kilometro/s"
}
if(unidad1.value == "centimetro" && unidad2.value == "centimetro"){
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " centimetro/s equivalen a " + resultado + " Centimetro/s"
}

if(unidad1.value == "centimetro" && unidad2.value == "yarda"){
    resultado = numero * 0.0109;
    txtResultado.innerHTML = numero + " centimetro/s equivalen a " + resultado + " Yardas/s"
}

if(unidad1.value == "centimetro" && unidad2.value == "pie"){
    resultado = numero * 0.394;
    txtResultado.innerHTML = numero + " metro/s equivalen a " + resultado + " Pies/s"}

    // yarda

if(unidad1.value == "yarda" && unidad2.value == "metro"){
    resultado = numero * 0.914;
    txtResultado.innerHTML = numero + " yarda/s equivalen a " + resultado + " metro/s"
}

if(unidad1.value == "yarda" && unidad2.value == "kilometro"){
    resultado = numero * 0.000914;
    txtResultado.innerHTML = numero + " yarda/s equivalen a " + resultado + " kilometro/s"
}
if(unidad1.value == "yarda" && unidad2.value == "centimetro"){
    resultado = numero * 91.44;
    txtResultado.innerHTML = numero + " yarda/s equivalen a " + resultado + " Centimetro/s"
}

if(unidad1.value == "yarda" && unidad2.value == "yarda"){
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " yarda/s equivalen a " + resultado + " Yardas/s"
}

if(unidad1.value == "yarda" && unidad2.value == "pie"){
    resultado = numero * 3;
    txtResultado.innerHTML = numero + " yarda/s equivalen a " + resultado + " Pies/s"}

     // pie

if(unidad1.value == "pie" && unidad2.value == "metro"){
    resultado = numero * 0.305;
    txtResultado.innerHTML = numero + " pie/s equivalen a " + resultado + " metro/s"
}

if(unidad1.value == "pie" && unidad2.value == "kilometro"){
    resultado = numero * 0.000305;
    txtResultado.innerHTML = numero + " pie/s equivalen a " + resultado + " kilometro/s"
}
if(unidad1.value == "pie" && unidad2.value == "centimetro"){
    resultado = numero * 30.48;
    txtResultado.innerHTML = numero + " pie/s equivalen a " + resultado + " Centimetro/s"
}

if(unidad1.value == "pie" && unidad2.value == "yarda"){
    resultado = numero * 0.333;
    txtResultado.innerHTML = numero + " pie/s equivalen a " + resultado + " Yardas/s"
}

if(unidad1.value == "pie" && unidad2.value == "pie"){
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " pie/s equivalen a " + resultado + " Pies/s"}




}