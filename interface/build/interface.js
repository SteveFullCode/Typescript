"use strict";
// let loja: object;
const BurguerK = {
    endereco: "Rua Salvador correia",
    nome: "BuguerK",
    status: true,
};
// console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da loja ${endereco}`);
    if (status === true) {
        console.log(`Status da loja Aberta`);
    }
    else {
        console.log(`loja fechada`);
    }
}
novaLoja({
    nome: "Machin",
    endereco: "Rua salvador",
    status: false,
});
