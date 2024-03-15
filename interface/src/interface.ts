// let loja: object;

// loja = {
//   nome: "Loja",
//   endereco: {
//     rua: "Rua",
//     numero: 123,
//   },
//   status: true,
// };

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  endereco: "Rua Salvador correia",
  nome: "BuguerK",
  status: true,
};

// console.log(BurguerK);

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso`);
  console.log(`Endereço da loja ${endereco}`);
  if (status === true) {
    console.log(`Status da loja Aberta`);
  } else {
    console.log(`loja fechada`);
  }
}

novaLoja({
  nome: "Machin",
  endereco: "Rua salvador",
  status: false,
});
