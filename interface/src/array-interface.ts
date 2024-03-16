// interface TecnologiaProps {
//   id: string;
//   nome: string;
//   slug?: string[];
//   slugs?: (string | number)[];
// }

// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   nome: "javascript",
//   slug: ["javascript", "typescript", "react"],
// };

interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "1",
      nome: "javascript",
      descricao: "descricao",
    },
    {
      id: "2",
      nome: "typescript",
      descricao: "descricao",
    },
    {
      id: "3",
      nome: "react",
    },
  ],
};

console.log(frontend.tecnologia);

// the below
