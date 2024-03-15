interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoCadastro: CadastroProps = {
  nome: "nome",
  email: "email",
  status: true,
};

// function novoUser({ nome, email, status }: CadastroProps) {
//   console.log(nome);
// }
function novoUser(propriedades: CadastroProps) {
  console.log(propriedades.email);
}

// console.log(novoCadastro);

novoUser({ email: "emai", status: true });
