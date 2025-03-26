# Usa a imagem oficial do .NET SDK para build e execução
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto e restaura as dependências
COPY backend.csproj ./
RUN dotnet restore

# Copia o restante do código-fonte para dentro do contêiner
COPY . .

# Compila e publica a aplicação
RUN dotnet publish -c Release -o /app/out

# Usa a imagem oficial do .NET Runtime para execução
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime

# Define o diretório de trabalho
WORKDIR /app/out

# Copia os arquivos publicados do estágio de build
COPY --from=build /app/out .

# Expõe a porta 5015 do contêiner
EXPOSE 5015

# Comando para iniciar a aplicação
CMD ["dotnet", "backend.dll"]