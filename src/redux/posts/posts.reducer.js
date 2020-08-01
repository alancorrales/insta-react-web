import { generatePosts } from './posts.utils';

const INITIAL_STATE = {
    posts: generatePosts()
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default postsReducer;