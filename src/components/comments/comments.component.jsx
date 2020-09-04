import React, { useState } from 'react';
import { connect } from 'react-redux';

import './comments.styles.scss';

import LikeButton from '../like-button/like-button.component';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { likeComment, addComment } from '../../redux/posts/posts.actions';

const Comments = ({ user, comments, post, likeComment, addComment }) => {
	const [comment, setComment] = useState('');

	const updateComment = (event) => {
		setComment(event.target.value);
	};

	const { avatar, username } = user;

	const submitComment = () => {
		addComment(post, {
			avatarUrl: avatar,
			author: username,
			description: comment,
		});
		setComment('');
	};

	return (
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
					<CustomInput
						maxLength='300'
						type='text'
						placeholder='Add a comment...'
						handleChange={updateComment}
						value={comment}
					/>
				</div>
				<CustomButton
					onClick={submitComment}
					type='button'
					active={false}
				>
					Add Comment
				</CustomButton>
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
	likeComment: (post, commentID) => dispatch(likeComment(post, commentID)),
	addComment: (post, comment) => dispatch(addComment(post, comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
