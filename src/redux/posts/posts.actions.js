import { PostsActionTypes } from './posts.types';

export const likePost = (post) => ({
    type: PostsActionTypes.LIKE_POST,
    payload: post
})
