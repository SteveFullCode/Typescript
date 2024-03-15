"use strict";
const novoCadastro = {
    nome: "nome",
    email: "email",
    status: true,
};
// function novoUser({ nome, email, status }: CadastroProps) {
//   console.log(nome);
// }
function novoUser(propriedades) {
    console.log(propriedades.email);
}
// console.log(novoCadastro);
novoUser({ email: "emai", status: true });
