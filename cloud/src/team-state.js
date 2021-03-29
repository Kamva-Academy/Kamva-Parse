const axios = require('axios');

const TeamState = Parse.Object.extend('TeamState');

export const getTeamUuid = async (token) => {
  const team = await axios('https://dev.rastaiha.ir/api/fsm/get_team/', {
    headers: {
      Authorization: 'JWT ' + token,
    },
  }).data;
  return team.uuid;
};

const getTeamState = async (uuid) => {
  const query = new Parse.Query('TeamState');
  query.equalTo('uuid', uuid);
  return await query.first({ useMasterKey: true });
};

const createTeamState = async (uuid, stateId) => {
  return await new TeamState().save({ uuid, stateId }, { useMasterKey: true });
};

export const changeTeamState = async (uuid, stateId) => {
  const teamState = await getTeamState(uuid);
  if (!teamState) {
    await createTeamState(uuid, stateId);
  } else {
    await teamState.save({ stateId }, { useMasterKey: true });
  }
};
