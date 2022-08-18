import { changeTeamState, createTeamState, getTeamState } from '../team-state';

Parse.Cloud.define(
  'changeTeamState',
  async ({ params: { stateId, uuid, currentStateName, teamEnterTimeToState } }) => {
    await changeTeamState(stateId, uuid, currentStateName, teamEnterTimeToState);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      stateId: {
        required: true,
      },
      currentStateName: {
        required: true,
      },
      teamEnterTimeToState: {
        required: true,
      },
    },
  },
);

Parse.Cloud.define(
  'createTeamState',
  async ({ params: { uuid, stateId, currentStateName, teamEnterTimeToState } }) => {
    await createTeamState(uuid, stateId, currentStateName, teamEnterTimeToState);
  },
  {
    fields: {
      uuid: {
        required: true,
      },
      uuid: {
        required: true,
      },
      stateId: {
        required: true,
      },
      currentStateName: {
        required: true,
      },
      teamEnterTimeToState: {
        required: true,
      }
    },
  },
);

Parse.Cloud.define(
  'getTeamState',
  async ({ params: { uuid } }) => {
    await getTeamState(uuid);
  },
  {
    fields: {
      uuid: {
        required: true,
      }
    },
  },
);
