# GitSearch - GitHub User Explorer

Esta página web interativa foi desenvolvida para buscar e exibir informações de usuários do GitHub, incluindo seus repositórios. Utilizando JavaScript modularizado, a aplicação realiza chamadas à API do GitHub para obter dados do usuário e de seus repositórios.

## Estrutura de Arquivos

- **index.js:** Contém a lógica principal da aplicação. Importa funções para buscar informações de usuário e repositórios, manipula eventos de clique e tecla, e atualiza a interface do usuário dinamicamente com os dados obtidos.

- **user.js:** Define a função `getUser` para buscar informações de um usuário no GitHub, utilizando a URL base (`baseUrl`) e retornando os dados em formato JSON.

- **repositories.js:** Contém a função `getRepositories`, que busca os repositórios de um usuário no GitHub. A quantidade de repositórios a serem recuperados é definida pela variável `repositoriesQuantity`.

- **user.js (objeto):** Define um objeto `user` que armazena informações do usuário, como URL do avatar, nome, biografia, nome de usuário e uma lista de repositórios. Métodos para definir informações do usuário e repositórios são fornecidos.

- **screen.js:** Define o objeto `screen` para manipular a renderização da interface do usuário. O método `renderUser` recebe um objeto de usuário e atualiza dinamicamente a interface com as informações, incluindo a criação de elementos HTML para exibir o perfil e os repositórios do usuário.

## Como Usar

1. Abra o arquivo `index.html` em um navegador web.
2. Insira o nome de usuário do GitHub no campo de pesquisa.
3. Clique no botão de pesquisa ou pressione "Enter" para obter informações do usuário e repositórios.
4. Observe a atualização dinâmica da interface com as informações recuperadas.

Sinta-se à vontade para personalizar e expandir este projeto conforme suas necessidades específicas.
