FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /app

COPY backend.csproj ./
RUN dotnet restore

COPY . .

RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime

WORKDIR /app/out

COPY --from=build /app/out .

EXPOSE 5015

CMD ["dotnet", "backend.dll"]