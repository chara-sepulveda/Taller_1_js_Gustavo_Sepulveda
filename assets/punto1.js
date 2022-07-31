//Escribir un algoritmo que valide si la suma de 2 números ingresados es
//positiva, negativa o cero.

const numero1 = Number(prompt('Ingresar número 1'))
const numero2 = Number(prompt('Ingresar número 2'))
const suma = numero1 + numero2 
alert(suma)

if (suma > 0) {
    alert('número positivo')
    } else if (suma === 0) {
        alert(`${suma}`)
    } else {
        alert(`${suma} número negativo`)
    }

