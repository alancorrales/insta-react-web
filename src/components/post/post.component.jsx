import React from 'react';
import { connect } from 'react-redux';

import './post.styles.scss';

import LikeButton from '../like-button/like-button.component';

import { likePost } from '../../redux/posts/posts.actions';

const Post = ({ post, likePost }) => {
	const { avatarUrl, author, imageUrl, description, liked, likes } = post;
	return (
		<div className='post'>
			<div className='header'>
				<img
					className='avatar'
					width='32px'
					height='32px'
					src={avatarUrl}
					alt='Profile avatar'
				/>
				<p>{author}</p>
			</div>
			<img className='image' src={imageUrl} alt='Post' />
			<div className='footer'>
				<div className='action-icons'>
					<LikeButton
						onClick={() => likePost(post)}
						className='like-button'
						liked={liked}
					/>
					<p className='likes'>{likes} likes</p>
				</div>
				<p>
					<span className='author'>{author}</span>
					<span>{description}</span>
				</p>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	likePost: (post) => dispatch(likePost(post)),
});

export default connect(null, mapDispatchToProps)(Post);
