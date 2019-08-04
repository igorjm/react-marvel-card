# Marvel Hero Cards

## Descricao
Desafio proposto no processo de selecao para vaga de desenvolvedor front-end. <br>

O projeto consiste em uma interface criada com React onde será consumida uma API, disponibilizada pela Marvel, que mostrará todos os heróis do universo Marvel.<br>
A ordenacao da lista é por order alfabética. É possível realizar uma busca pelo nome dos heróis através de um filtro<br>

Nessa interface é possível acessar a descrição do heróis clicando no card do mesmo.<br>
Dentro das informações do herói é possível visualizar uma breve descrição, sendo possível altera-la, e todas as séries que este herói participou.<br>

O frontend foi criado com React + Redux, e se encontra no diretório /client.<br>
Para o banco de usados, foi usado o MongoDB. Este foi virtualizado num cluster, afim de praticidade.<br>

## Instalacao
Para instalar o projeto, basta baixa-lo ou clona-lo. Depois, instale as dependências do projeto via

`npm install`

ou

`yarn install`

Para consumir a API disponibilizada pela Marvel é necessário possuir um Chave Pública e uma Chave Privada. Para isso é necessário ter uma conta no [Site da Marvel](https://developer.marvel.com/docs#). <br>
Com as chaves em mãos, é necessário criar um arquivo ".env.development" e adicionar suas chaves:

```
// .env.development

REACT_APP_MARVEL_PUBLIC_KEY=your_key
REACT_APP_MARVEL_PRIVATE_KEY=your_key
```


## Rodando o projeto
Após a instalacao das dependencias e adicionado as chaves publicas e privadas, o mesmo pode ser inicializado através da pasta raíz e utilizar

`npm start`

ou

`yarn start`

## Testando o projeto
Para realizar os testes no projeto basta:

`npm test`

ou

`yarn test`

## Tecnologias usadas
[ReactJS](https://pt-br.reactjs.org/) <br>
[Styled-Components](https://www.styled-components.com/) <br>
[Material-UI](https://material-ui.com/) <br>

[Jest](https://jestjs.io/) <br>
[Redux-saga](https://redux-saga.js.org/) <br>
