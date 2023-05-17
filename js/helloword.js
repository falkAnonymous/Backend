// var resultado;
// function soma(x,y){
//     resultado = x+y;
//     alert(resultado);

// }
// function dividir(x,y){
//     resultado = x/y;
//     alert(resultado);
// }

// function multiplicar(x,y){
//     resultado = x*y;
//     alert(resultado);
// }

// function subtrair(x,y){
//     resultado = x-y;
//     alert(resultado);
// }
// function conversa(){
//     let nome = prompt("")
//     alert("Seja Bem Vindo "+ nome)
// }

// function calc(){
//     let base = prompt();
//     let altura = prompt();
//     let resultado = Math.pow(base,altura).toString()
//     alert(resultado)
// }



function circulo() {
    const PI = Math.PI;
    let raio = prompt();
    const result = PI * Math.pow(raio, 2);
    alert(result)
}
function hipotenusa() {
    let co;
    let ca;
    let h = Math.pow(co = prompt(), 2) + Math.pow(ca = prompt(), 2);
    alert(Math.pow(h, 2));
}
function realDolar() {
    let TaxaCambio = 4.951;
    let real = prompt();
    let result = real / TaxaCambio;
    let dolar = result;
    alert(dolar)
}
function Fahrenheit() {
    let Celsius = prompt()
    let Fahrenheit = Celsius * 9 / 5 + 32
    let resultFahrenheit = Fahrenheit
    alert(resultFahrenheit)

}
function Baskhara1() {
    let a, b, c;
    a = parseInt(prompt());
    b = parseInt(prompt());
    c = parseInt(prompt());
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert(x1 + "\n" + x2)

}
// function Baskhara2() {
//     let a, b, c;
//     a = parseInt(prompt());
//     b = parseInt(prompt());
//     c = parseInt(prompt());
//     let delta = Math.pow(b, 2) - 4 * a * c;
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a)
//     alert(x2)
// }