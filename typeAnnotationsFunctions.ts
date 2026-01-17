// básica
function sum(a: number, b: number): number {
    return a + b;
}

// parâmetros opcionais (só pode definir os últimos como opcionais)
function greet(name: string, age?: number): string {
    return `Olá ${name}! Você tem ${age} anos.`;
}
