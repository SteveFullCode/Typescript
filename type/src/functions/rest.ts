//function totalVendas(
//  vendas1: number,
//  vendas2: number,
//  vendas3: number,
//  vendas4: number
//): number {
//const total = vendas1 + vendas2 + vendas3 + vendas4;

//console.log(total);

//return total;
//}

//totalVendas(20, 10, 30, 100);

function totalVendas(...vendas: number[]) {
  const quantidadeDeVendas = vendas.length;

  console.log(`Você fez ${quantidadeDeVendas} vendas hoje`);
}

// totalVendas(30, 10, 30, 100);

function mosrarNomes(...nomes: string[]) {
  console.log(nomes.length);

  nomes.map((nome) => {
    console.log(nome);
  });
}

mosrarNomes("Steve", "Steve", "Steve");
