/**
 * Use interface:
 * - Quando estiver modelando objetos (shape de dados);7
 * - Quando é necessário extender a forma natural (OO);
 * - Quando é necessário ter declaration merging (junta (“mescla”) duas ou mais declarações com o mesmo nome e
 * 		transforma em uma só).
 *
 *  Use type quando:
 *  - É necessário ter union (exemplo: type Status = "loading" | "success" | "error");
 *  - É necessário compor tipos com interseção (&);
 *  - Há a necessidade de tipar coisas que não são "objeto puro".
 */

// nas interfaces definimos a estrutura de um objeto, em yypes podemos definir qualquer coisa.
// exemplo:

type Input = string | string[]; // --> input é ou string ou um array de strings, pode ser os dois

function prompt(input: Input) {}

// exemplo um pouco mais real
interface Dog {
    name: string;
    breed: string;
    bark(): string;
}

interface Cat {
    name: string;
    color: string;
    meow(): string;
}

interface Bird {
    name: string;
    wingspan: string;
    chirp(): string;
}

interface Cow {
    name: string;
    wight: string;
    moo(): string;
}

// -- > aqui, caso uso ou (&), todos serão obrigatórios
type Animal = Dog | Cat | Cow | Bird; // --> é possível criar interfaces aqui dentro do type

function createAnimal(animal: Animal) {}
