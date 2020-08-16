import { generateUserPosts, generateUserContacts } from './user.utils';
import faker from 'faker';


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
        default:
            return state;
    }
}

export default userReducer;