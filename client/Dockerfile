FROM node:18-alpine as build

WORKDIR /client

COPY [".", "."]

RUN npm install

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build ["/client/build", "/usr/share/nginx/html"]

EXPOSE 80