import faker from 'faker';

import { UserActionTypes } from './user.types';

import {
    toggleFollowFromFollowers,
    toggleFollowFromFollowing,
} from './user.utils';

import {
    generateUserPosts,
    generateUserContacts,
} from '../../utils/utils'

const followers = generateUserContacts(faker.random.number(50));

const INITIAL_STATE = {
    id: '1',
    name: 'Alan Corrales',
    username: 'alancorrales_',
    avatar: 'https://picsum.photos/150',
    followers,
    following: followers.filter((follower) => follower.following)
        .concat(generateUserContacts(faker.random.number(50), true)),
    posts: generateUserPosts(7)
}


const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UserActionTypes.TOGGLE_FOLLOW_ON_FOLLOWER:
            return {
                ...state,
                following: toggleFollowFromFollowing(state.following, payload),
                followers: toggleFollowFromFollowers(state.followers, payload)
            };
        case UserActionTypes.UNFOLLOW_ON_FOLLOWING:
            return {
                ...state,
                following: toggleFollowFromFollowing(
                    state.following,
                    { ...payload, following: true }
                ),
                followers: toggleFollowFromFollowers(
                    state.followers,
                    { ...payload, following: true }
                )
            }
        default:
            return state;
    }
}

export default userReducer;