FROM node:latest

WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .

EXPOSE 3000

CMD [ "yarn", "start-dev" ]