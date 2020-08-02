import { generatePosts } from './posts.utils';
import { PostsActionTypes } from './posts.types';

const INITIAL_STATE = {
    posts: generatePosts()
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostsActionTypes.LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => (post.id === action.payload.id ? {
                    ...post,
                    liked: !post.liked
                } : { ...post }))
            }
        default:
            return state;
    }
}

export default postsReducer;