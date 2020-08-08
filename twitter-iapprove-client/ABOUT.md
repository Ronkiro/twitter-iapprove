# Sobre o cliente

Assim como a API, o cliente necessitava de flexibilidade e que aplicasse os princípios de SOLID.

# A arquitetura

Visto que a Globo é uma empresa de grande porte, a mesma necessita de flexibilidade e adaptabilidade. 

Eu segui uma arquitetura bem comum em aplicações Angular, com design modular (Isto é, cada módulo representa uma feature do software).

Temos a seguinte estrutura:

``` 

* core -> Representa entidades que possuem lógica referente ao negócio.
* shared -> Representa entidades que contém informações à serem compartilhadas entre as features/diferentes módulos da aplicação.
* feature (tweets) -> representa a branch de feature (Neste caso, a tweets). A mesma é dividida em algumas outras camadas:

--- components -> containers e componentes do módulo.
--- facades -> Facades do módulo, detém toda a lógica de negócio da aplicação. As facades entram em contato com serviços do core, estes que são burros e contém apenas a lógica de contatos externos.
--- page -> container principal da feature.
```

# Tecnologias

O cliente foi construído utilizando Angular + Sass + Bootstrap + Font Awesome + RxJS.

Cogitei o uso de Redux (com ngrx) porém devido ao tempo e a complexidade que ngrx agregaria negativamente, optei por construir as camadas de estado apenas com RxJS.

Tentei preservar a imutabilidade dos estados da aplicação, para assim facilitar integrações à mesma, e até mesmo possíveis refatorações para o uso de ngrx, caso a aplicação cresça em porte.


[Retornar à API](../README.md)
