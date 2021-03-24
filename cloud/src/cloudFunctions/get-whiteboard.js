import { getOrCreateWhiteboard } from '../whiteboard';

Parse.Cloud.define(
  'getWhiteboard',
  async ({ params: { uuid } }) => {
    return await getOrCreateWhiteboard(uuid);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
    },
  },
);
