function calcular() {

    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    
    let calculo = peso / (altura * altura)

   if(calculo < 18.5) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Magreza'
   } else if(calculo >= 18.5 && calculo <= 24.9) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Normal'
   } else if(calculo >= 25 && calculo <= 29.9) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Sobrepeso'
   } else if(calculo >= 30 && calculo <= 34.9) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Obesidade grau I'
   } else if(calculo >= 35 && calculo <= 39.9) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Obesidade grau II'
   } else if(calculo >= 40) {
    document.getElementById('resultado').innerHTML = calculo.toFixed(2) + ' Obesidade grau III'
   }
}
