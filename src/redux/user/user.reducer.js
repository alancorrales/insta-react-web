import faker from 'faker';

import { UserActionTypes } from './user.types';

import {
    generateUserPosts,
    generateUserContacts,
    updateFollowerOnToggleFollow,
    updateFollowingOnToggleFollow
} from './user.utils';

const INITIAL_STATE = {
    id: '1',
    name: 'Alan Corrales',
    username: 'alancorrales_',
    avatar: 'https://picsum.photos/150',
    followers: generateUserContacts(faker.random.number(100)),
    following: generateUserContacts(faker.random.number(100), true),
    posts: generateUserPosts(7)
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.TOGGLE_FOLLOW_ON_FOLLOWER:
            return {
                ...state,
                followers: updateFollowerOnToggleFollow(state.followers, action.payload),
                following: updateFollowingOnToggleFollow(state.following, action.payload)
            };
        default:
            return state;
    }
}

export default userReducer;