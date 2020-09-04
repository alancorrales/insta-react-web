import { PostsActionTypes } from './posts.types';

export const likePost = (post) => ({
	type: PostsActionTypes.LIKE_POST,
	payload: post,
});

export const likeComment = (post, commentID) => ({
	type: PostsActionTypes.LIKE_COMMENT,
	payload: { post, commentID },
});
