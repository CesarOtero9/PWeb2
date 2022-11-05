let resultado = document.querySelector('#resultado')

function calcIMC(){
    let nombre = document.getElementById('nom').value
    let altura = document.getElementById('estatura').value
    let peso = document.getElementById('peso').value
    const imc = (peso / (altura * altura)).toFixed(2)

    if (altura.value !== '' && peso.value !== '') {

        var classificacion = ''
    
        if (imc < 18.5) {
          clasificacion = 'Bajo de peso'
        } else if (imc < 25) {
          clasificacion = 'Peso normal'
        } else if (imc < 30) {
          clasificacion = 'sobrepasas el peso'
        } else if (imc < 35) {
          clasificacion = 'Obesidad grado I'
        } else if (imc < 41) {
          clasificacion = 'Obesidad grado II'
        } else {
          clasificacion = 'Obesidad grado III'
        }
        
        resultado.innerHTML = 'Hola ' + nombre + ' Tu IMC es de: ' + imc + ' ' +  clasificacion ;
       } else {
        resultado.innerHTML = 'Preencha os campos'
      }
    
}
