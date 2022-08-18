const MentorsInRoomState = Parse.Object.extend('MentorsInRoom');

export const getMentorsInRoom = async (uuid) => {
    const query = new Parse.Query('MentorsInRoom');
    query.equalTo('uuid', uuid);
    query.equalTo('MentorLeftRoom', false)
    const result = await query.find({ success: function (list) { } }, { useMasterKey: true })
    return result;
};

export const getMentorInRoom = async (uuid, mentorId) => {
    const query = new Parse.Query('MentorsInRoom');
    query.equalTo('uuid', uuid);
    query.equalTo('MentorId', mentorId);
    query.equalTo('MentorLeftRoom', false)
    const result = await query.first({ useMasterKey: true })
    return result;
};

export const addMentorToRoom = async (uuid, mentorId, mentorName, mentorArrivalTime, mentorLastUpdated) => {
    if (!uuid) {
        // todo: fix for supervised workshops
        return;
    }
    const mentor = await getMentorInRoom(uuid, mentorId);
    if (!mentor){
        return await new MentorsInRoomState().save({ 'uuid': uuid, 'MentorId': mentorId, 'MentorName': mentorName, 'MentorArrivalTime': mentorArrivalTime, 'MentorLastUpdated': mentorLastUpdated }, { useMasterKey: true });
    }
};

export const updateMentorTime = async (uuid, mentorId, mentorLastUpdated) => {
    if (!uuid || !mentorId) {return}
    const mentor = await getMentorInRoom(uuid, mentorId);
    if (!mentor) {return}
    mentor.set('MentorLastUpdated', mentorLastUpdated)
    await mentor.save( { useMasterKey: true } );
}

export const announceMentorDeparture = async (uuid, mentorId) => {
    if (!uuid || !mentorId) {return}
    const mentor = await getMentorInRoom(uuid, mentorId);
    if (!mentor) {return}
    mentor.set('MentorLeftRoom', true)
    await mentor.save( { useMasterKey: true } );
}