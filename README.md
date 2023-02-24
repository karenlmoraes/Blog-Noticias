# Blog de Notícias
Trabalho desenvolvido em squad para o módulo 5 do curso de **Desenvolvedor Fullstack** - Programadores Cariocas.

### Colaboradores
- [Beatriz Fidelis](https://github.com/fidelisbia)
- [Guilherme Batista](https://github.com/Ziiron1)
- [Karen Moraes](https://github.com/karenlmoraes)
- [Thâmara Evelyn](https://github.com/Thamaraeevelyn)
- [Vanessa Santos](https://github.com/VanessaSantos75)

## Utilização

1. Clone o repositório
2. Instale as dependências necessárias: ```npm install```
3. Crie um banco de dados com nome Blog e importe o arquivo blog.sql

```
- CREATE DATABASE blog
```
4- Faça as requisições através de algum software. Método utilizado: Postman.


## Operações CRUD

Este projeto implementa as operações CRUD (Create, Read, Update e Delete) em um blog de notícias.

### Endpoints

A seguir, estão listados os endpoints disponíveis para cada operação:

#### CREATE

- **Método:** POST
- **Endpoint:** `/api/posts`
- **Descrição:** cria uma nova notícia com os seguintes campos: título, conteúdo, autor, data de publicação.
- **Exemplo de body:**
```json
{
    "titulo": "Nova notícia",
    "conteudo": "Conteúdo da nova notícia",
    "autor": "João da Silva",
    "data_publicacao": "2022-02-24"
}
```

<p align="center">
  <img src="https://images2.imgbox.com/5d/3c/ug8cXKlx_o.png" width="500">
</p>

#### GET

- **Método:** GET
- **Endpoint:** `/api/posts`
- **Descrição:** pega todos os posts existentes.

<p align="center">
  <img src="https://images2.imgbox.com/66/0b/nthaKiNX_o.png" width="500">
</p>

####  GETBYID

- **Método:** GETBYID
- **Endpoint:** `/api/posts/:id`
- **Descrição:** pega o post pelo id existente.

<p align="center">
  <img src="https://images2.imgbox.com/25/ef/u9SvnZwS_o.png" width="500">
</p>

#### DELETE

- **Método:** DELETE
- **Endpoint:** `/api/posts/:id`
- **Descrição:** deleta o post pelo id.

<p align="center">
  <img src="https://images2.imgbox.com/78/70/mUVLU6XB_o.png" width="500">
</p>

#### PUT

- **Método:** PUT
- **Endpoint:** `/api/posts/:id`
- **Descrição:** atualiza os post específico.
- **Exemplo de body:**
```json
{
    "titulo": "Nova notícia2",
    "conteudo": "Conteúdo da nova notícia",
    "autor": "João da Silva",
    "data_publicacao": "2022-02-24"
}
```

<p align="center">
  <img src="https://images2.imgbox.com/d2/93/YHUGCcB6_o.png" width="500">
</p>


