import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import './profile.styles.scss';

import FollowersList from '../../components/followers-list/followers-list.component';
import FollowingList from './../../components/following-list/following-list.component';

const ProfilePage = ({
	user: { username, name, avatar, followers, following, posts },
}) => {
	const [showFollowers, setShowFollowers] = React.useState(false);
	const [showFollowing, setShowFollowing] = React.useState(false);

	const handleShowFollowers = () => {
		setShowFollowers(true);
	};

	const handleHideFollowers = () => {
		setShowFollowers(false);
	};

	const handleShowFollowing = () => {
		setShowFollowing(true);
	};

	const handleHideFollowing = () => {
		setShowFollowing(false);
	};

	return (
		<div className='container'>
			<div className='profile'>
				<img className='image' src={avatar} alt='profile' />
				<div className='user-info'>
					<h3 className='username'>{username}</h3>
					<div className='stats'>
						<p>
							<span className='bold'>{posts.length}</span> posts
						</p>
						<p className='follower-stat' onClick={handleShowFollowers}>
							<span className='bold'>{followers.length}</span> followers
						</p>
						<p className='following-stat' onClick={handleShowFollowing}>
							<span className='bold'>{following.length}</span> following
						</p>
					</div>
					<h4>{name}</h4>
				</div>
			</div>
			<div className='profile-posts'>
				{posts.map((post) => (
					<img
						className='profile-post'
						key={post.id}
						src={post.imageUrl}
						alt='post'
					/>
				))}
			</div>

			<Modal
				className='modal'
				open={showFollowers}
				onClose={handleHideFollowers}
				aria-labelledby='Followers list'
				aria-describedby='List of users that follow your profile'
			>
				<FollowersList />
			</Modal>

			<Modal
				className='modal'
				open={showFollowing}
				onClose={handleHideFollowing}
				aria-labelledby='Following list'
				aria-describedby='List of users that you follow'
			>
				<FollowingList />
			</Modal>
		</div>
	);
};
const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
