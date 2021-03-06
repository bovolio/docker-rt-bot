# specify the node base image with your desired version node:<version>
FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node rt-bot.js
EXPOSE 8082