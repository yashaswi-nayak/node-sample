FROM node:lts-alpine3.16

WORKDIR /code

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm","run","start"]
