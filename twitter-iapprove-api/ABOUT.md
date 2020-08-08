# Sobre a API

O node por padrão não fornece tecnologias suficientes para a construção de uma arquitetura flexível e escalável. Por isto, utilizei as seguintes ferramentas:

- Awilix: Para IoC, assim consegui criar singletons e injetá-los com facilidade, facilitando a criação da arquitetura e a aplicação de SOLID.
- morgan: Logging assíncrono, console.log compromete o servidor.
- winston: Também para facilitar logging.
- Express: Um dos melhores frameworks web atuais.
- cors: Uma biblioteca para facilitar a manipulação de CORS.
- node-fetch: Para usar o fetch p/ requisições HTTP.
- sequelize: ORM para gerenciar o banco de dados.
- tcomb: Para a criação do modelo de domínio
- sqlite3: O banco de dados que utilizei (Ele é simples para se utilizar na memória, então também pode ser configurado com maior facilidade)
- dotenv: Para facilitar o uso de .env
- config: Facilitar acesso à configurações
- moment: P/ gerenciar datas/horas.
- ramda: P/ algumas funções úteis de programação funcional.

Algumas outras tecnologias também foram usadas, mas estas são as principais.

# A arquitetura

Visto que a Globo é uma empresa de grande porte, a mesma necessita de flexibilidade e adaptabilidade. Eu segui uma arquitetura próxima ao que consideramos como DDD, onde o domínio é o ponto central da aplicação, assim abstraindo a aplicação e isolando as camadas.

Temos a seguinte estrutura:

```
- application -> Controllers e rotas, entidades que direcionam as requisições, porém não contém lógica de negócio.

- infrastructure -> Interfaces de acesso à recursos externos e seus modelos, como requisições ao banco de dados e HTTP. Também contém lógica de bibliotecas. Esta camada sabe a lógica do que o negócio necessita, mas nao o modela, portanto não o representa.

- domain -> Classe que representa o domínio do negócio. Esta classe contém o modelo que representa o negócio como um todo, sendo a parte mais crítica do sistema.

- configuration -> Camada que contém alguns arquivos de configuração que são acessados por toda aplicação.

- core: camada que contém middlewares e outros recursos importantes para o funcionamento da aplicação. Não contém lógica de negócio

```

[Retornar à API](../README.md)