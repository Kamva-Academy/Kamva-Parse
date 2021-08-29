import { changeTeamState } from '../team-state';

Parse.Cloud.define(
  'changeTeamState',
  async ({ params: { uuid, stateId } }) => {
    await changeTeamState(uuid, stateId);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      stateId: {
        required: true,
      },
    },
  },
);
