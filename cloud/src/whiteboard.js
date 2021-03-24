import makeId from './make-id';

const WhiteboardAction = Parse.Object.extend('WhiteboardAction');
const Whiteboard = Parse.Object.extend('Whiteboard');

const ACTIONS = {
  ADD_NODE: 'ADD_NODE',
  UPDATE_NODE: 'UPDATE_NODE',
  REMOVE_NODE: 'REMOVE_NODE',
  REMOVE_ALL_NODES: 'REMOVE_ALL_NODES',
};

export const getWhiteboard = async (uuid) => {
  const query = new Parse.Query('Whiteboard');
  query.equalTo('uuid', uuid);
  return await query.first({ useMasterKey: true });
};

const createWhiteboard = async (uuid) => {
  return await new Whiteboard().save(
    { uuid, nodes: [] },
    { useMasterKey: true },
  );
};

export const getOrCreateWhiteboard = async (uuid) => {
  const whiteboard = await getWhiteboard(uuid);
  if (!whiteboard) {
    return await createWhiteboard(uuid);
  }
  return whiteboard;
};

export const removeAllNodes = async (uuid) => {
  await new WhiteboardAction().save(
    { uuid, action: { type: ACTIONS.REMOVE_ALL_NODES } },
    { useMasterKey: true },
  );

  const whiteboard = await getWhiteboard(uuid);
  whiteboard.save({ nodes: [] }, { useMasterKey: true });
};

export const removeNode = async (uuid, nodeId) => {
  await new WhiteboardAction().save(
    { uuid, action: { type: ACTIONS.REMOVE_NODE, nodeId } },
    { useMasterKey: true },
  );

  const whiteboard = await getWhiteboard(uuid);
  const nodes = whiteboard.get('nodes') || [];
  whiteboard.save(
    { nodes: nodes.filter((node) => node.id !== nodeId) },
    { useMasterKey: true },
  );
};

export const addNode = async (uuid, node) => {
  node.id = makeId();

  await new WhiteboardAction().save(
    { uuid, action: { type: ACTIONS.ADD_NODE, node } },
    { useMasterKey: true },
  );

  const whiteboard = await getWhiteboard(uuid);
  whiteboard.add('nodes', node);
  whiteboard.save({}, { useMasterKey: true });
};

export const updateNode = async (uuid, nodeId, shape) => {
  await new WhiteboardAction().save(
    { uuid, action: { type: ACTIONS.UPDATE_NODE, nodeId, shape } },
    { useMasterKey: true },
  );

  const whiteboard = await getWhiteboard(uuid);
  const nodes = whiteboard
    .get('nodes')
    .map((node) => (node.id === nodeId ? { ...node, shape } : node));
  whiteboard.save({ nodes }, { useMasterKey: true });
};
