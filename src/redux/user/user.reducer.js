import { generateUserPosts } from './user.utils';


const INITIAL_STATE = {
    id: '1',
    name: 'Alan Corrales',
    username: 'alancorrales_',
    avatar: 'https://picsum.photos/150',
    followers: [
        '.',
        '..',
        '...'
    ],
    following: [
        '.',
        '..',
        '...'
    ],
    posts: generateUserPosts(7)
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;