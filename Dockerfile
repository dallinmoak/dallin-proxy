FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci 

COPY . .

EXPOSE 8088

CMD [ "node", "app.js"]
