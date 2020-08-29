import React from 'react';
import { connect } from 'react-redux';

import './following-list.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { unfollowOnFollowing } from './../../redux/user/user.actions';

const FollowingList = ({ following, unfollow }) => {
	return (
		<div className='following-list'>
			<section className='header'>
				<h4>Following</h4>
			</section>
			<section className='body'>
				{following.map((followingUser) => {
					const { id, username, name, avatar } = followingUser;

					return (
						<div key={id} className='following-row'>
							<div className='following'>
								<img src={avatar} alt='Following' className='avatar' />
								<div className='handle'>
									<p className='username'>{username}</p>
									<p className='name'>{name}</p>
								</div>
							</div>
							<CustomButton
								onClick={() => unfollow(followingUser)}
								type='button'
								active
							>
								Following
							</CustomButton>
						</div>
					);
				})}
			</section>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	following: user.following,
});

const mapDispatchToProps = (dispatch) => ({
	unfollow: (followingUser) => dispatch(unfollowOnFollowing(followingUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingList);
