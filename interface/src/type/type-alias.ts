type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(uuid);
  console.log(nome);
}

function logUsuario(uuid: Uuid) {
  console.log(uuid);
}

// acessar(123, "steve");
// acessar(44, "amanda");

// logUsuario("123");
type Moedas = "BRL" | "EUR" | "USD" | "GBP";

function comprarIem(moeda: Moedas) {
  console.log(moeda);
}

comprarIem("BRL");
