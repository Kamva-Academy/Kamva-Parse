import {
    getMentorsInRoom,
    getMentorInRoom,
    addMentorToRoom,
    updateMentorTime,
    announceMentorDeparture
} from '../mentorsInRoom';

Parse.Cloud.define(
    'getMentorsInRoom',
    async ({ params: { uuid } }) => {
        await getMentorsInRoom(uuid);
    },
    {
        fields: {
            uuid: {
                required: true,
            }
        },
    },
);

Parse.Cloud.define(
    'getMentorInRoom',
    async ({ params: { uuid, mentorId } }) => {
        await getMentorInRoom(uuid, mentorId);
    },
    {
        fields: {
            uuid: {
                required: true,
            },
            mentorId: {
                required: true,
            }
        },
    },
);

Parse.Cloud.define(
    'addMentorToRoom',
    async ({ params: { uuid, mentorId, mentorName, mentorArrivalTime, mentorLastUpdated } }) => {
        await addMentorToRoom(uuid, mentorId, mentorName, mentorArrivalTime, mentorLastUpdated);
    },
    {
        fields: {
            uuid: {
                required: true,
            },
            mentorId: {
                required: true,
            },
            mentorName: {
                required: true,
            },
            mentorArrivalTime: {
                required: true,
            },
            mentorLastUpdated: {
                required: true,
            }
        },
    },
);

Parse.Cloud.define(
    'updateMentorTime',
    async ({ params: { uuid, mentorId, mentorLastUpdated } }) => {
        await updateMentorTime(uuid, mentorId, mentorLastUpdated);
    },
    {
        fields: {
            uuid: {
                required: true,
            },
            mentorId: {
                required: true,
            },
            mentorLastUpdated: {
                required: true,
            }
        },
    },
);

Parse.Cloud.define(
    'announceMentorDeparture',
    async ({ params: { uuid, mentorId } }) => {
        await announceMentorDeparture(uuid, mentorId);
    },
    {
        fields: {
            uuid: {
                required: true,
            },
            mentorId: {
                required: true,
            }
        },
    },
);