FROM node:18-alpine as build

WORKDIR /server

COPY [".", "."]

RUN npm install

RUN npm run build

FROM node:18-alpine

WORKDIR /server

COPY ["./package.json", "./package-lock.json", "./"]

RUN npm install --omit=dev

COPY --from=build ["/server/dist/", "./"]

EXPOSE 3001

CMD [ "node", "index.js" ]