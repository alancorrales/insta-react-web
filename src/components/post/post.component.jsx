import React from 'react';

import './post.styles.scss';
import LikeButton from '../like-button/like-button.component';

const Post = ({ avatarUrl, author, imageUrl, description }) => (
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
				<LikeButton className='like-button' liked={true} />
			</div>
			<p>
				<span className='author'>{author}</span>
				<span>{description}</span>
			</p>
		</div>
	</div>
);

export default Post;
