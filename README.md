# npm int

`npm init -y`: cria o package.json instantaneamente aceitando todos os valores padrão, o que economiza tempo ao iniciar um projeto do zero. O `-y` significa "yes to all", então não haverá perguntas ao criar o package. É possível retirar este sufixo.

# package.json

Após o comando, é interessante tornar o package.json dessa forma:

```
{
    "name": "estudo-typescript",
    "version": "1.0.0",
    "description": "Estudo de Typescript com NodeJS.",
    "main": "build/index.js",
    "scripts": {
    "build": "tsc",
    "dev": "tsx src/index.ts",
    "start": "node ."
    },
    "repository": {
    "type": "git",
    "url": "git+https://github.com/naraazi/estudo-typescript.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "module",
    "bugs": {
    "url": "https://github.com/naraazi/estudo-typescript/issues"
    },
    "homepage": "https://github.com/naraazi/estudo-typescript#readme",
    "devDependencies": {
    "@types/node": "^25.0.3",
    "tsx": "^4.21.0",
    "typescript": "^5.9.3"
    }
}
```

## Explicando o package.json

`"name"`: nome do projeto no ecossistema Node.js.

`"version"`: controla a versão atual do software.

`"description"`: resumo do objetivo do projeto.

`"main": "build/index.js`: executa scripts Node.js puros, não sendo o padrão usado em frameworks que o acompanham - como o NextJS.

`scripts/"build": "tsc"`: invoca o compilador do TypeScript para transformar seus arquivos .ts em .js dentro da pasta de saída definida, não sendo o padrão usado em frameworks que o acompanham - como o NextJS.

`scripts/"dev": "tsx src/index.ts"`: usa a biblioteca tsx para executar seu código TypeScript diretamente em tempo de desenvolvimento, sem precisar compilar manualmente a cada mudança, não sendo o padrão usado em frameworks que o acompanham - como o NextJS.

`scripts/"start": "node ."`: executa o projeto compilado (definido em main) usando Node.js puro, não sendo o padrão usado em frameworks que o acompanham - como o NextJS.

`"type": "module"`: informa ao NodeJS que estamos usando ECMAScript Modules (ESM), permitindo o uso de import/export em vez de require (prática mais moderna).

# npm install

`npm install -D`: instala pacotes e os registra como "dependências de desenvolvimento". Isso é crucial porque o TypeScript não é necessário para rodar o app em produção, apenas para construí-lo.

## Pacotes para instalar

- `typescript`: núcleo que permite converter o código typescript para javascript.

- `tsx`: executor rápido que permite rodar arquivos typescript diretamente no Node.js.

- `@types/node`: fornece as definições de tipos para as APIs nativas do Node.js.

Quando há a necessidade de instalar pacotes, sempre uma correção é necessária.

Por exemplo:

Em javascript apenas isso bastaria:

`npm install next@13.1.6 react@18.2.0 react-dom@18.2.0`

Mas como é typescript, isso aqui também deve ser instalado:

`npm install -D typescript @types/node @types/react @types/react-dom`

# tsconfig.json

tsconfig.json: dita como o compilador deve se comportar.

`npx tsc --init`: comando que o inicia automaticamente.

## Explicando o npx tsc --init

`npx`: como foi instalado o typescript como uma dependência de desenvolvimento (-D), o comando tsc não está disponível globalmente no terminal. O npx localiza o executável dentro da pasta node_modules e o executa.

`tsc --init`: diz ao compilador do typescript: "Crie um arquivo de configuração inicial baseado nos padrões recomendados".

## Scripts importantes em tsconfig.json

```
{
    "compilerOptions": {
        "esModuleInterop": true,
        "skipLibCheck": true,
        "strict": true,
        "lib": ["ESNext"],
        "target": "esnext",
        "module": "nodenext",
        "moduleResolution": "nodenext",
        "outDir": "build"
    },
    "include": ["src"], --> especifica explicitamente que apenas os arquivos dentro de src devem ser compilados
    "exclude": ["node_modules"] --> garante que o compilador nunca tente processar as bibliotecas externas, evitandoerros e lentidão
}
```

## Explicando os scripts importantes em tsconfig.json

`compilerOptions/"esModuleInterop": true`: garante que você consiga importar bibliotecas que não foram escritas em ESM (usando import em vez de require) sem erros de compatibilidade.

`compilerOptions/"strict": true`: ativa o modo de segurança máxima. O typescript exigirá que você defina tipos corretamente e não permitirá comportamentos ambíguos (como variáveis que podem ser null sem aviso).

`compilerOptions/"skipLibCheck": true`: faz o compilador ignorar a checagem de tipos dentro das pastas node_modules. Isso torna a compilação muito mais rápida.

`compilerOptions/"target": "esnext"`: define para qual versão do javascript seu código será convertido. "ESNext" foca nas versões mais modernas suportadas pelo Node.js atual.

`compilerOptions/"module": "nodenext"`: diz ao typescript como lidar com os módulos de importação, garantindo que ele siga as regras mais recentes do Node.js.

`compilerOptions/"outDir": "build"`: define para onde o código javascript convertido deve ir. É a pasta que você enviaria para um servidor de produção.

`"include": ["src/**/*.ts", "src/**/*.tsx"]`: especifica explicitamente que apenas os arquivos dentro de src/ devem ser compilados.

`"exclude": ["node_modules"]`: garante que o compilador nunca tente processar as bibliotecas externas, evitando erros e lentidão.
