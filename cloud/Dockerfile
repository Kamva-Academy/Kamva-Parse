# build zero
FROM node:latest as build_cloud

WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn
ENV PATH="./node_modules/.bin:$PATH"
COPY ./ ./
RUN yarn build

# build nginx
FROM parseplatform/parse-server:4.5.0

COPY --from=build_cloud /app/dist /parse-server/cloud/

EXPOSE 1337
