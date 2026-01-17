function createUser(name) {
    return { name, createdAt: new Date() };
}

const lorenzo = createUser("Lorenzo");

function updateWallet(user, wallet) {
    user.wallet = { ...user.wallet, ...wallet }; // -- ... é usado para expandir elementos de um array, objeto ou
    // argumentos de função
}
