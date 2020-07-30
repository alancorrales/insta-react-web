import React from 'react';

import './posts.styles.scss';

const Post = ({ data }) => {
	const { avatarUrl, author, imageUrl, description } = data;

	return (
		<div className='card'>
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
			<img width='614px' src={imageUrl} alt='Main content' />
			<div className='footer'>
				<p>
					<span className='author'>{author}</span>
					<span>{description}</span>
				</p>
			</div>
		</div>
	);
};

export default Post;
