let autenticado: boolean = true;

let codeStatus: number = 1;

// Tudo que for diferente de zero, string vazia, undefined, será verdadeiro
autenticado = Boolean(codeStatus);

console.log(autenticado);
console.log(typeof autenticado);
