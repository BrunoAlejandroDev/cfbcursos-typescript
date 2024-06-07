"use strict";
class Canal {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Canal("CFBCursos", "Curso de TypeScript");
console.log(c1.canal);
console.log(c1.curso);
