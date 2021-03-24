import { removeAllNodes } from '../whiteboard';

Parse.Cloud.define(
  'removeAllNodes',
  async ({ params: { uuid } }) => {
    await removeAllNodes(uuid);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
    },
  },
);
