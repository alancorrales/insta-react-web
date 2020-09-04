import React from 'react';
import { connect } from 'react-redux';

import './comments.styles.scss';

import LikeButton from '../like-button/like-button.component';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { likeComment } from '../../redux/posts/posts.actions';

const Comments = ({ comments, post, likeComment }) => (
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
						<LikeButton
							className='like-button'
							liked={liked}
							onClick={() => likeComment(post, comment.id)}
						/>
					</div>
				);
			})}
		</section>
		<section className='footer'>
			<div className='comment-input-container'>
				<CustomInput maxlength='300' type='text' placeholder='Add a comment...' />
			</div>
			<CustomButton
				// onClick={() => toggleFollow(follower)}
				type='button'
				active={false}
			>
				Add Comment
			</CustomButton>
		</section>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	likeComment: (post, commentID) => dispatch(likeComment(post, commentID)),
});

export default connect(null, mapDispatchToProps)(Comments);
