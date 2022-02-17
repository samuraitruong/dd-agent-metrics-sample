FROM node:16.13-alpine

WORKDIR /src

COPY . .

RUN yarn

EXPOSE 3000
