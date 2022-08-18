const TeamState = Parse.Object.extend('TeamState');

export const getTeamState = async (uuid) => {
  const query = new Parse.Query('TeamState');
  query.equalTo('uuid', uuid);
  const result = await query.first({ useMasterKey: true })
  return result;
};

export const createTeamState = async (uuid, stateId, currentStateName, teamEnterTimeToState) => {
  return await new TeamState().save({ uuid, stateId, currentStateName, teamEnterTimeToState }, { useMasterKey: true });
};

export const changeTeamState = async ({ uuid, stateId, currentStateName, teamEnterTimeToState }) => {
  if (!uuid) {
    // todo: fix for supervised workshops
    return;
  }
  const teamState = await getTeamState(uuid);
  if (!teamState) {
    await createTeamState(uuid, stateId, currentStateName, teamEnterTimeToState);

  } else {
    teamState.set('currentStateName', currentStateName)
    teamState.set('teamEnterTimeToState', teamEnterTimeToState)
    await teamState.save({ stateId }, { useMasterKey: true });
  }
};
