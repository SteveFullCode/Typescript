type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 123,
  nome: "Curso de Typescript",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "categoria-1",
  quantidadeProduto: 10,
};

type ProdutosProps = Info & Categoria;

const novoProdutos: ProdutosProps = {
  //   ...produtoInfo,
  //   ...categoria1,
  id: 123,
  nome: "Curso de javascript",
  descricao: "desenovido",
  slug: "categoria-1",
  quantidadeProduto: 10,
};

console.log(novoProdutos);
