import React from 'react';

import './comments.styles.scss';

import LikeButton from '../like-button/like-button.component';

const Comments = ({ comments }) => (
	<div className='comments'>
		<section className='header'>
			<h4>Comments</h4>
		</section>
		<section className='body'>
			{comments.map((comment) => {
				const {
					id,
					author,
					description,
					avatarUrl,
					liked,
					likes,
				} = comment;

				return (
					<div key={id} className='comment-section'>
						<div className='user-data'>
							<img
								src={avatarUrl}
								alt='User'
								className='avatar'
							/>
						</div>
						<div className='comment-data'>
							<p>
								<span className='author'>{author}</span>{' '}
								<span>{description}</span>
							</p>
							<p className='num-likes'>{likes} likes</p>
						</div>
						<LikeButton className='like-button' liked={liked} />
						{/* onClick={() => likePost(post)} */}

						{/* <CustomButton
							onClick={() => toggleFollow(follower)}
							type='button'
							active={following}
						>
							{following ? 'Following' : 'Follow'}
						</CustomButton> */}
					</div>
				);
			})}
		</section>
	</div>
);

export default Comments;
