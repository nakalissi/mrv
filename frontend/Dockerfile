# Usa uma única imagem base do Node + Nginx
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código para dentro do contêiner
COPY . .

# Compila a aplicação Angular para produção
RUN npm run build --configuration=production

# Instala o Nginx para servir a aplicação
RUN apk add --no-cache nginx

# Move os arquivos do Angular para a pasta do Nginx
RUN mv /app/dist/frontend /usr/share/nginx/html

# Remove arquivos desnecessários para reduzir o tamanho da imagem
RUN rm -rf /app /root/.npm /var/cache/apk/*

# Copia o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
