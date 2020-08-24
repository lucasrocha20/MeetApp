<h3 align="center">MeetApp</h3>

<p align="center">
  <img src="https://github.com/lucasrocha20/MeetApp/blob/master/imagens/icone.png" alt="logo"/>
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Imagens](#imagens)
- [Feito Com](#feito-com)
- [Executando o projeto](#executando-o-projeto)
- [Contato](#contato)


## Sobre o Projeto
<p align="justify"> Este sistema tem a finalidade de usuários web criar e agendar eventos com imagem, título, descrição, local e horário em que os usuários mobile conseguiram se inscrever para poder comparecer ao evento. O sistema conta com um aviso de email quando alguém se inscreve em seu evento.</p>

## Imagens

### Feito com
Mobile (Apenas android):
- [React Native](http://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)

Web:
- [React Js](https://reactjs.org/)
- [Redux](https://redux.js.org/)

API:
- [Node Js](https://nodejs.org/)
- [Express](https://expressjs.com/)

Padrões de código aplicado:
- [ESLint](https://eslint.org/) 
- [Prettier](https://prettier.io/) 
- [EditorConfig](https://editorconfig.org/)

### Executando o projeto

<p align="justify"> Para executar o projeto primeiramente deve ter os bancos postgreSQL e Redis instalado em sua máquina, rode o npm install nos 3 projetos (Mobile, Web e API) em seguida, na pasta do backend crie uma cópia do arquivo .env.exemple com o nome .env e preencha as variaveis ambiente de acordo com a conexão do seus bancos, para rodar no terminal basta digitar npm run dev para subir a aplicação e npm run queue para subir a parte de fila do envio de emails. No projeto web basta digitar npm run start para executar o projeto. Por fim, para rodar o projeto em android, basta você buildar ele com o comando npx react-native run-android.</p>

## Contato

Lucas Rocha - [Github](https://github.com/lucasrocha20) - **lucas_rocha.14@outlook.com**

