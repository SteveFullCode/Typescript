//Como deixar o valor opcional.

function cadastro(
  email: string,
  senha: number
  //nome: string,
  // nomes = "aluno",
  //endereço?: string,
  // numero?: number
): void {
  let data = { email, senha };
  console.log(data);
}

cadastro("stveherison@fmail.com", 1234567);
