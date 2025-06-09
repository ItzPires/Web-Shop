FROM node:20

WORKDIR /app

COPY web/ .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]