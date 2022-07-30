FROM node:latest

WORKDIR /code

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm","run","start"]
