"use strict";
function mostraPromocao(preco) {
    console.log(`Promção no curso por apenas: ${preco}`);
}
const novoCurso = {
    id: "123",
    nome: "Curso de Typescript",
    preco: "100",
    promocao: mostraPromocao,
};
console.log(novoCurso);
console.log(novoCurso.promocao(80));
