import React from 'react';
import { connect } from 'react-redux';
import TextClamp from 'react-string-clamp';
import Modal from '@material-ui/core/Modal';

import './post.styles.scss';

import LikeButton from '../like-button/like-button.component';

import { likePost } from '../../redux/posts/posts.actions';

const Post = ({ post, likePost }) => {
	const [showComments, setShowComments] = React.useState(false);

	const handleShowComments = () => {
		setShowComments(true);
	};

	const handleHideComments = () => {
		setShowComments(false);
	};

	const {
		avatarUrl,
		author,
		imageUrl,
		description,
		liked,
		likes,
		comments,
	} = post;

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
				<p className='author'>{author}</p>
				<TextClamp className='text' text={description} lines='3' element='p' />
				{comments.length > 0 ? (
					<p className='view-comments' onClick={handleShowComments}>
						View all {comments.length} comments
					</p>
				) : null}
			</div>
			<Modal
				className='modal'
				open={showComments}
				onClose={handleHideComments}
				aria-labelledby='Users comments'
				aria-describedby='List of users comments for this post'
			>
				<p>Hello world!</p>
			</Modal>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	likePost: (post) => dispatch(likePost(post)),
});

export default connect(null, mapDispatchToProps)(Post);
