import { updateNode } from '../whiteboard';

Parse.Cloud.define(
  'updateNode',
  async ({ params: { uuid, nodeId, shape } }) => {
    await updateNode(uuid, nodeId, shape);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      nodeId: {
        required: true,
      },
      shape: {
        required: true,
      },
    },
  },
);
