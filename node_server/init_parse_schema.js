import Parse from 'parse/node.js';

Parse.initialize(
  process.env.APP_ID,
  process.env.JS_KEY,
  process.env.MASTER_KEY,
);

Parse.serverURL = process.env.INTERNAL_PARSE_SERVER_URL;

function initWhiteboardSchema() {
  const schema = new Parse.Schema('Whiteboard')
    .addString('uuid', {
      required: true,
    })
    .addArray('nodes', {
      required: true,
      defaultValue: [],
    });
  schema.setCLP({
    get: { '*': true },
    find: {},
    count: {},
    create: {},
    update: {},
    delete: {},
    addField: {},
    protectedFields: {},
  });
  return schema.save();
}

const errorHandler = (err) => {
  console.log(err);
  if (err.code === 100) {
    initDBSchema();
  }
};

export default function initDBSchema() {
  setTimeout(() => {
    initWhiteboardSchema().catch(errorHandler);
  }, 1000);
}
