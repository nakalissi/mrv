# Usa uma única imagem do .NET SDK para build e execução
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS app

# Define o diretório de trabalho
WORKDIR /app

# Copia e restaura as dependências
COPY backend.csproj ./
RUN dotnet restore --force

# Copia o restante do código
COPY . .

# Compila e publica a aplicação diretamente no diretório final
RUN dotnet publish -c Release -o /app/out

# Define o diretório de trabalho final
WORKDIR /app/out

ENV ASPNETCORE_URLS=http://+:5000

# Expõe a porta da API
EXPOSE 5000

# Define o comando de execução
CMD ["dotnet", "backend.dll"]
