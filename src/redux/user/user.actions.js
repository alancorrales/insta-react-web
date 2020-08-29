import { UserActionTypes } from './user.types';

export const toggleFollowOnFollower = (follower) => ({
    type: UserActionTypes.TOGGLE_FOLLOW_ON_FOLLOWER,
    payload: follower
})

export const unfollowOnFollowing = (followingUser) => ({
    type: UserActionTypes.UNFOLLOW_ON_FOLLOWING,
    payload: followingUser
})
