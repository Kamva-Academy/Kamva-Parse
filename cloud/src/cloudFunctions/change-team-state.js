import { changeTeamState, getTeamUuid } from '../team-state';

Parse.Cloud.define(
  'changeTeamState',
  async ({ params: { token, stateId } }) => {
    const uuid = await getTeamUuid(token);
    await changeTeamState(uuid, stateId);
  },
  {
    fields: {
      token: {
        required: true,
      },
      stateId: {
        required: true,
      },
    },
  },
);
