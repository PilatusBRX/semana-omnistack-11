<img src="./screenshot/semana-omnistac-11.png" align="center"></img>

<h1 align="center">Semana Omnistack 11</h1>
<p align="center">Projeto <strong>Be The Hero</strong> desenvolvido durante a Semana Omnistack 11 da Rocketseat</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.13.1-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
  <a aria-label="Desafios" href="DESAFIOS.md">
  	<img src="https://img.shields.io/badge/desafios-OK-blueviolet"></img>
  </a>
  <a aria-label="Completo" href="https://rocketseat.com.br/week-11/aulas#4">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
</p>

## Instalação

Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:

```bash
cd backend
yarn install
yarn dev
```

Para iniciar o **Frontend** do React utilize os comandos:

```bash
cd frontend
yarn install
yarn start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido .

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois execute os comandos:

```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador ou teste o aplicativo por `LAN`: baixe o aplicativo _Expo_ da Play Store ou App Store e em seguida escaneie o código QR.

## Backend

Veja em [backend/README.md](./backend) para informações sobre o Backend e arquitetura.

## Frontend

Veja em [frontend/README.md](./frontend) para informações sobre o Frontend e os padrões. O Frontend desenvolvido no Dia 3 (com o [desafio](DESAFIOS.md) feito) ficou assim:

<p align="center">

<img align="center" src="./screenshot/web.gif"></img>

## Mobile

O App Mobile (React Native) desenvolvido:

<img align="center" src="./screenshot/mobile.gif"></img>

</p>
## Imnsonia

Para testar a API do DevRadar, baixe e instale o [Insomnia](https://insomnia.rest/download/):

<img align="center" src="./screenshot/insomnia.png"></img>

## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
