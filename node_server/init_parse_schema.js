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

function initWhiteboardActionsSchema() {
  const schema = new Parse.Schema('WhiteboardAction')
    .addString('uuid', {
      required: true,
    })
    .addObject('action', {
      required: true,
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

function initTeamStateSchema() {
  const schema = new Parse.Schema('TeamState')
    .addString('uuid', {
      required: true,
    })
    .addString('stateId', {
      required: true,
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

function initRequestMentorSchema() {
  const schema = new Parse.Schema('RequestMentor')
    .addString('teamId', {
      required: true,
    })
    .addNumber('playerId', {
      required: true,
    });
  schema.setCLP({
    get: { '*': true },
    find: {},
    count: {},
    create: { '*': true },
    update: {},
    delete: { '*': true },
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
    initWhiteboardActionsSchema().catch(errorHandler);
    initTeamStateSchema().catch(errorHandler);
    initRequestMentorSchema().catch(errorHandler);
  }, 1000);
}
