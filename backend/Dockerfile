FROM node:22-alpine

WORKDIR /app

COPY . .

RUN apk add bash
RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]