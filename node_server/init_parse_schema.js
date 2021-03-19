import Parse from 'parse/node.js';

Parse.initialize(
  process.env.APP_ID,
  process.env.JS_KEY,
  process.env.MASTER_KEY,
);

Parse.serverURL = process.env.INTERNAL_PARSE_SERVER_URL;
