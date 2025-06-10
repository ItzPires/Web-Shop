
# Web Shop
 ## Execução:
 **Pré-requisitos:**
- Para executar este projecto, deve possuir Docker instalado e em execução

### Iniciar o projeto
**Modo Produção:**
Para iniciar o projeto em modo de Produção deve executar:
```bash
docker-compose -f docker-compose-prod.yml up --build
```
  **Modo Desenvolvimento :**
Para iniciar o projeto em modo de Desenvolvimento  deve executar:
```bash
docker-compose -f docker-compose-dev.yml up --build
```

## Utilização:
 - Pode aceder ao projeto utilizando o url [localhost:3000](localhost:3000)
### Dados
Você pode:
 1. Utilizar o arquivo  `products.json`  disponível na pasta  `data/`
 2. Ou gerar novos dados executando:

```bash
python generate.py
```

## Informações:
- Este projeto foi desenvolvido em React.JS
