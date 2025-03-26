# Usa a imagem oficial do .NET SDK para build e execução
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS app

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto e restaura as dependências
COPY src/backend.csproj ./
RUN dotnet restore --force

# Copia o código-fonte para dentro do contêiner
COPY src/ .

# Compila e publica a aplicação
RUN dotnet publish -c Release -o /app/out

# Define o diretório final para execução
WORKDIR /app/out

# Expõe a porta 8080 do contêiner
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["dotnet", "backend.dll"]
