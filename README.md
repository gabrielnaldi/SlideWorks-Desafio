# Slideworks-Desafio
Repositório utilizado para resolver o problema proposto pela equipe SlideWorks.<hr>

## Etapas

### * Conhecer o React
Nessa etapa, inicialmente, busquei entender o que é o React e como ele funciona. Após isso, procurei uma forma de instalá-lo no VS Code.

### * Solução

* Header: Integrei o react com o bootstrap para adicionar o cabeçalho estilizado.
* API: Pesquisei uma forma de consumir dados de API. Encontrei a AXIOS e, a seguir, a integrei com o sistema. Assim, ela cuidará da parte de acesso aos dados (dentro do arquivo Api.js).
* Principal: 
  1. Criei um state, inicialmente, vazio para armazenar os dados de todos os livros.
  2. Adicionei o componente DidMount para armazenar somente os dados Array (data) fornecidos pela API no state anterior.
  3. Com esses dados, utilizei um MAP para mapear os livros encontrados a partir de seus ID's.
  4. Criei uma função Card apenas para exibir os dados em forma de cartão (estilizar os dados).
  5. Passei os dados mapeados para a função Card e, dessa forma, os dados já estarão expostos na tela.
* Footer: Adicionei um arquivo Footer.js integrado com bootstrap, apenas para exibição.
* CSS: Por fim, adicionei os detalhes finais ao site.


### * Dificuldades 
* O Primeiro Contato
  1. Conhecer a ferramenta exigiu tempo, o que tornou o desenvolvimento mais lento.
  2. Mas nada muito sério.
* A maior difuldade encontrada, sem dúvidas, foi conseguir mapear os dados que me interessavam da API.
  1. Dentro desses dados, o que me importava era acessar o Array data, mas todas as tentativas levaram à captura de dados incorretos.
  2. A metodologia de acessos livros.data deve de ser alterada para livros.data.data para garantir que os dados estivessem corretos.
  3. Além disso, a linha {livro[0]?.[0].id} foi o elemento mais dificil de se construir, ela garantiu uma leitura correta de 10 elementos.
