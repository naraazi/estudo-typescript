// Tupla é um array com posições fixas, onde cada posição pode ter um tipo específico.

type NameList = string[]; // --> isso é um array

type CalendarDate = [day: number, month: number, year: number]; // --> isso é uma tupla
const date: CalendarDate = [30, 10, 2002];
