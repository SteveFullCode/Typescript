interface CursoProps {
  id: string;
  nome: string;
  preco: string;
  //Definir apenas a fução o qqe ela deve esperar ee retornar

  promocao: (preco: number) => void;
}

function mostraPromocao(preco: number): void {
  console.log(`Promção no curso por apenas: ${preco}`);
}

const novoCurso: CursoProps = {
  id: "123",
  nome: "Curso de Typescript",
  preco: "100",
  promocao: mostraPromocao,
};

console.log(novoCurso);

console.log(novoCurso.promocao(80));
