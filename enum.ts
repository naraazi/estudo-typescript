// sintaxe
enum Direction {
    // -- a numeração vem automaticamente. Para colocar uma numeração personalizada, consultar a primeira linha
    // North=2 -- aí todos que seguem são atualizados a partir do 2
    North,
    South,
    East,
    West,
}

const position = {
    x: 100,
    y: 230,
    direction: Direction.South,
};

// -- enums podem ser strings, chamando o enum, o valor em string será utilizado
enum ClothingSize {
    ExtraSmall = "PP",
    Small = "P",
    Medium = "M",
    Large = "G",
    ExtraLarge = "GG",
}
