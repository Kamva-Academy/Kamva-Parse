import { addNode } from '../whiteboard';

Parse.Cloud.define(
  'addNode',
  async ({ params: { uuid, node } }) => {
    await addNode(uuid, node);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      node: {
        required: true,
      },
    },
  },
);
