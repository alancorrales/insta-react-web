import React from 'react';
import { connect } from 'react-redux';

import './followers-list.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { toggleFollowOnFollower } from './../../redux/user/user.actions';

const FollowersList = ({ followers, toggleFollow }) => {
	return (
		<div className='followers-list'>
			<section className='header'>
				<h4>Followers</h4>
			</section>
			<section className='body'>
				{followers.map((follower) => {
					const { id, username, name, avatar, following } = follower;

					return (
						<div key={id} className='follower-row'>
							<div className='follower'>
								<img src={avatar} alt='Follower' className='avatar' />
								<div className='handle'>
									<p className='username'>{username}</p>
									<p className='name'>{name}</p>
								</div>
							</div>
							<CustomButton
								onClick={() => toggleFollow(follower)}
								type='button'
								active={following}
							>
								{following ? 'Following' : 'Follow'}
							</CustomButton>
						</div>
					);
				})}
			</section>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	followers: user.followers,
});

const mapDispatchToProps = (dispatch) => ({
	toggleFollow: (follower) => dispatch(toggleFollowOnFollower(follower)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList);
