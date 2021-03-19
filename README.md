# Installation

First, create `mongo-init.js` file like the bellow codes:

```
db.createUser({
  user: "<user for database which shall be created>",
  pwd: "<password of user>",
  roles: [
    {
      role: "readWrite",
      db: "<database to create>",
    },
  ],
});
```

Then, you should create a `.env` file like `.env-sample` file. (Make sure the database variables match the `mongo-init.js` file)

## Run as Development

```
docker-compose up
```

See `http://localhost/parse_dashboard`.

## Create Cloud Codes

Go to cloud dir and run the below code.

```
yarn
yarn build
```
