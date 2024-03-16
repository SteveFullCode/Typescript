interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "123",
  nome: "Lef 4 Dead 2",
  descricao: "Jogo de aventura",
  plataforma: ["PS4", "PC"],
};

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4deadDLC: DLC = {
  jogoOriginal: left4dead,
  id: "90",
  nome: "Lef 4 Dead - novo Mapa",
  descricao: "Jogo de aventura",
  plataforma: ["PS4", "PS5", "PS6", "PS7"],
  novoConteudo: ["modo coop", "plataforma"],
};

console.log(left4deadDLC);
console.log(left4dead);
