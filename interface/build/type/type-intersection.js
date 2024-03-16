"use strict";
const produtoInfo = {
    id: 123,
    nome: "Curso de Typescript",
};
const categoria1 = {
    slug: "categoria-1",
    quantidadeProduto: 10,
};
const novoProdutos = {
    //   ...produtoInfo,
    //   ...categoria1,
    id: 123,
    nome: "Curso de javascript",
    descricao: "desenovido",
    slug: "categoria-1",
    quantidadeProduto: 10,
};
console.log(novoProdutos);
