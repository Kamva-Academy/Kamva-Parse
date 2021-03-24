import { removeNode } from '../whiteboard';

Parse.Cloud.define(
  'removeNode',
  async ({ params: { uuid, nodeId } }) => {
    await removeNode(uuid, nodeId);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      nodeId: {
        required: true,
      },
    },
  },
);
