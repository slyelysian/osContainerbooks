FROM node:12.16.1-alpine3.10

WORKDIR usr/app

COPY package.json ./
RUN npm install
COPY ./ ./
CMD["npm","start"]
EXPOSE 8080
