interface ProduoPrps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProduoPrps = {
  id: "1",
  nome: "Produto 1",
  descricao: "Descrição do Produto 1",
};

// produto1.id = "123"

console.log(produto1);
