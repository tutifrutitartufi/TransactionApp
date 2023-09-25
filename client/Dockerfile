FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . ./code

EXPOSE 3000
CMD [ "npm", "run", "start" ]