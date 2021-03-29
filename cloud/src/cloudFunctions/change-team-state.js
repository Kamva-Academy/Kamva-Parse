import { changeTeamState, getTeamUuid } from '../team-state';

Parse.Cloud.define(
  'changeTeamState',
  async ({ params: { token, stateId, baseURL } }) => {
    const uuid = await getTeamUuid(token, baseURL);
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
      baseURL: {
        required: true,
      },
    },
  },
);
