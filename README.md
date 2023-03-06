# Desafio para o processo seletivo EnviaByBus

### Sem o Docker deve ser realizado o clone do projeto

- Após o clone, abra o terminal e execute o comando <b>npm install</b>

- Esta sendo utilizado variáveis de ambiente no projeto, então é necessário que após instalar as dependências no passo acima,
 você procure pelo arquivo <b>.env.sample</b> na pasta raiz do sistema, copie, cole e renomeie o arquivo para <b>.env</b>

- Dentro do arquivo <b>.env</b> será necessário colocar o token que é fornecido para conexão com a api OpenWeather que fornece as informações climáticas.

### Com o Docker

- 

### Modo de pesquisa

-Digitar a cidade desejada no campo de texto.
-Aguardar e conferir as informações climáticas da cidade e qual foi o pokemon escolhido.

### Apis Utilizadas 

```
- Gerar um pokemon
https://pokeapi.co/api/v2

- Fazer uma consulta de cidade para obter informações climáticas
https://api.openweathermap.org

```

### É Necessario a criação de login na api OpenWeather para gerar a APIKEY
- Através do site https://api.openweathermap.org
- No topo da página procure e clique no botão de "Sign In";
- Clique no link "Create an Account";
- Entre com as suas credenciais e crie um novo acesso, para que possa gerar um `APPID`, na plataforma;
- Quando estiver logado, procure e clique no botão "API Keys";
- Ao ser direcionado para a próxima página visualize um pequeno formulário chamado "Create Key";
- No input "Name", coloque o nome que achar mais conveniente, por exemplo: "Default";
- Quanto estiver logado entre na URL https://home.openweathermap.org/api_keys;
- Visualize um pequeno formulário chamado "Create Key";
- No input "API key name", coloque o nome que achar mais conveniente, por exemplo: "Default";
- Em seguida clique no botão "Generate";
- Ao lado do formulário uma "Key" (chave), será gerada com o nome que você informou no passo anterior, essa chave é o que a plataforma chama de `APPID` e será utilizada ao realizarmos as requisições Rest para as API(s) da plataforma;

### Tecnologias utilizadas 
- Styled-components
- react-bootstrap
- React JS
- Typescript
- Para consultar as dependencias instaladas consulte o arquivo package.json

