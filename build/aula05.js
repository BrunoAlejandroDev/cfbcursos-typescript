"use strict";
let cursos1 = ["JavaScript", "TypeScript", "Java"];
cursos1.push("C");
let valores = [10, 20, 30];
let valores2 = [10, 20, 30];
valores.push(40);
let variosTipos;
let variosTiposArray = [10, "bruno"];
let soma = 0;
function arrayNumeros(valores) {
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma;
}
let numeros = [10, 20, 30];
console.log(arrayNumeros(numeros));
