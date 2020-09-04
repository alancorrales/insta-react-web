import { PostsActionTypes } from './posts.types';

import { generateRandomPosts } from '../../utils/utils';

const INITIAL_STATE = {
	posts: generateRandomPosts(),
};

const postsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PostsActionTypes.LIKE_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post.id === action.payload.id
						? {
								...post,
								liked: !post.liked,
								likes: !post.liked
									? post.likes + 1
									: post.likes - 1,
						  }
						: { ...post }
				),
			};
		case PostsActionTypes.LIKE_COMMENT:
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post.id === action.payload.post.id) {
						const comments = post.comments.map((comment) =>
							comment.id === action.payload.commentID
								? {
										...comment,
										liked: !comment.liked,
										likes: comment.liked
											? comment.likes - 1
											: comment.likes + 1,
								  }
								: { ...comment }
						);
						return {
							...post,
							comments,
						};
					} else {
						return { ...post };
					}
				}),
			};
		default:
			return state;
	}
};

export default postsReducer;
