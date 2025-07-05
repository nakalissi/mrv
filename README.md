# 🏡 MRV - Sistema de Gestão de Leads

Este projeto é uma aplicação backend para gestão de leads imobiliários, desenvolvida em **.NET 9**, com arquitetura RESTful e preparada para execução via Docker.



## 📦 Tecnologias Utilizadas

- **.NET 9 (C#)** – Plataforma moderna para desenvolvimento backend
- **Entity Framework Core** – ORM para acesso a banco de dados
- **ASP.NET Web API** – Para exposição de endpoints REST
- **Docker** – Containerização do backend para facilitar o deploy
- **SQL Server** – Banco de dados relacional (via Docker Compose)



## 📁 Estrutura do Projeto

```
mrv/
├── mrv.sln                         # Solution file (.NET)
├── docker-compose.yml             # Orquestração do backend + banco
├── api.cs                         # Arquivo de rota API (possível gerador?)
├── .env                           # Variáveis de ambiente
├── backend/
│   ├── backend.csproj             # Projeto principal ASP.NET
│   ├── Program.cs                 # Inicialização da aplicação
│   ├── appsettings.json           # Configurações gerais
│   ├── appsettings.Development.json
│   ├── Controllers/
│   │   └── LeadsController.cs     # Endpoint principal da API
│   ├── Data/
│   │   └── AppDbContext.cs        # Contexto do banco via EF Core
│   ├── Model/
│   │   └── Lead.cs                # Modelo de dados (entidade Lead)
│   └── Properties/
│       └── launchSettings.json    # Configurações de execução local
```



## 🚀 Executando o Projeto

### Requisitos

- Docker e Docker Compose instalados
- .NET 9 SDK (para rodar sem Docker)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/nakalissi/mrv.git
cd mrv
```

2. Suba os containers:

```bash
docker-compose up --build
```

A aplicação estará acessível em `http://localhost:5000`.



## 🔄 Endpoints disponíveis

| Método | Rota               | Descrição                   |
|--------|--------------------|-----------------------------|
| GET    | /api/leads         | Lista todos os leads        |
| POST   | /api/leads         | Cria um novo lead           |
| PUT    | /api/leads/{id}    | Atualiza um lead existente  |
| DELETE | /api/leads/{id}    | Remove um lead              |



## 🧪 Testando a API

Você pode utilizar ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Ou diretamente via `curl`:

```bash
curl http://localhost:5000/api/leads
```



## ⚙️ Configuração via .env

O projeto suporta variáveis de ambiente para facilitar a configuração de porta, banco de dados e ambiente. Exemplo de `.env`:

```
ASPNETCORE_ENVIRONMENT=Development
DOTNET_RUNNING_IN_CONTAINER=true
```



## 🛠️ Melhorias Futuras

- Autenticação via JWT
- Validações robustas com FluentValidation
- Integração com sistemas de CRM
- Cobertura de testes com xUnit ou NUnit



## 📜 Licença

Este projeto é distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações.



## 👤 Autor

Desenvolvido por [Daniel Calissi Nakatate](https://github.com/nakalissi)



> MRV é um projeto didático ou de automação interna para gestão de leads imobiliários. Não é afiliado oficialmente à construtora MRV Engenharia.
