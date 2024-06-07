// AULA 05 - UNION TYPES

let cursos1 = ["JavaScript", "TypeScript", "Java"]; // ao criar sem declarar tipo, o tipo será definido via valores 
cursos1.push("C");
//console.log(cursos1);

let valores:number[] = [10, 20, 30]; // declaração de tipo na instanciação
let valores2: Array<number> = [10, 20, 30]; // outra forma de declaração
valores.push(40);
//console.log(valores);
//console.log(valores2);

// É possível criar variáveis que aceitem mais de um tipo usando any ou "concatenação" de tipos
let variosTipos: string | number; // aceita valores string e number

let variosTiposArray = [10, "bruno"]; // aqui, o tipo da variável variosTiposArray foi definido via valores

let soma:number = 0;
function arrayNumeros(valores:number[]) {
    
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
        //console.log(valores[i]);
    }
    return soma;
}

let numeros:number[] = [10,20,30];
console.log(arrayNumeros(numeros));
