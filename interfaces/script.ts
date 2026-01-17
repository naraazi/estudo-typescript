// -- convenção pra interface (também chamado de Contrato) é PascalCase
interface UserWallet {
    coins?: number;
    credits?: number;
}

interface User {
    name: string;
    createdAt: Date;
    wallet?: {
        // -- sendo um objeto, pode-se criar uma interface (UserWallet) para isso. Ficaria como lá embaixo
        coins?: number;
        credits?: number;
    };
    // wallet?: UserWallet;
}

function createUser(name: string): User {
    return { name, createdAt: new Date() };
}

function updateWallet(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet };
}

// -- sem interface (prefira usar interface)
function createPerson(name: string): {
    name: string;
    createdAt: Date;
    wallet?: {
        coins?: number;
        credits?: number;
    };
} {
    return { name, createdAt: new Date() };
}

// -- exemplo de interface extendida (existente)
declare global {
    interface Console {
        sayHello(): void;
    }
}

console.sayHello(); // -- naturalmente, console não tinha "sayHello", então foi adicionado na sua interface

// -- extends interface
interface Admin extends User {
    ban(user: User): void;
    kick(user: User): void;
}
