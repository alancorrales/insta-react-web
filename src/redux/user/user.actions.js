import { UserActionTypes } from './user.types';

export const toggleFollowOnFollower = (follower) => ({
    type: UserActionTypes.TOGGLE_FOLLOW_ON_FOLLOWER,
    payload: follower
})
