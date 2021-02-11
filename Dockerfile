FROM node:alpine

WORKDIR /home/nestdocker

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD yarn start:dev
