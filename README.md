````markdown
# 🚀 Full Stack Application - Angular & .NET Core

Este projeto é uma aplicação **Full Stack** utilizando **Angular** no frontend, **.NET Core** no backend e **PostgreSQL** como banco de dados. A aplicação está completamente **dockerizada** para facilitar o deploy e execução local.

---

## **📌 Pré-requisitos**

Antes de rodar a aplicação, certifique-se de ter instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## **📌 Como Rodar a Aplicação**

A aplicação pode ser executada utilizando **Docker Compose**, que configurará automaticamente o **frontend, backend e banco de dados**.

### **1️⃣ Clone o repositório**

```sh
git clone https://github.com/nakalissi/mrv.git
cd mrv
```
````

### **2️⃣ Configure as Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione:

```ini
DB_HOST=db
DB_NAME=leadsdb
DB_USER=postgres
DB_PASSWORD=postgres
API_BASE_URL=http://localhost:5015
```

### **3️⃣ Suba os containers com Docker Compose**

```sh
docker-compose up --build
COMPOSE_BAKE=true docker-compose up --build
```

Isso iniciará os serviços:

- 🖥️ **Frontend**: Disponível em [http://localhost](http://localhost)
- ⚙️ **Backend**: Disponível em [http://localhost:5015](http://localhost:5015)
- 🗄️ **Banco de Dados**: PostgreSQL rodando na porta **5432**

---

## **📌 Estrutura do Projeto**

```
/fullstack-app
│── /backend        # Código da API .NET Core
│── /frontend       # Código do Frontend Angular
│── /db             # Scripts SQL para PostgreSQL
│── docker-compose.yml  # Configuração Docker
│── README.md       # Instruções do projeto
```

---

## **📌 Tecnologias Utilizadas**

### 🖥️ **Frontend**

- **Angular** 🚀
- **TypeScript**
- **Nginx** para servir a aplicação

### ⚙️ **Backend**

- **.NET Core 8.0** ⚡
- **Entity Framework Core**
- **PostgreSQL**

### 📦 **Infraestrutura**

- **Docker & Docker Compose** 🐳

---

## **📌 Testando a Aplicação**

Após iniciar os containers, você pode testar a API com:

```sh
curl http://localhost:5015/api/leads
```

Ou acessar o **Swagger UI** em:
📌 [http://localhost:5015/swagger](http://localhost:5015/swagger)

---

## **📌 Parando a Aplicação**

Para parar os serviços, execute:

```sh
docker-compose down
```

---

## **📌 Problemas Comuns e Soluções**

### ❌ **Erro: "Porta já em uso"**

🔹 Execute:

```sh
docker ps  # Verifique quais containers estão rodando
docker stop <container_id>  # Pare os containers em conflito
```

Então, tente rodar novamente:

```sh
docker-compose up --build
```

### ❌ **Erro: Arquivos não encontrados no contêiner**

🔹 Tente reconstruir tudo:

```sh
docker-compose down --volumes
docker-compose up --build
```
