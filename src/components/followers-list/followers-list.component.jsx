import React from 'react';
import { connect } from 'react-redux';

import './followers-list.styles.scss';

const FollowersList = ({ followers }) => {
	return (
		<div className='followers-list'>
			<section className='header'>
				<h4>Followers</h4>
			</section>
			<section className='body'>
				{followers.map(({ id, username, name, avatar, following }) => (
					<div key={id} className='follower-row'>
						<div className='follower'>
							<img src={avatar} alt='Follower' className='avatar' />
							<div className='handle'>
								<p className='username'>{username}</p>
								<p className='name'>{name}</p>
							</div>
						</div>
						<button className='follow'></button>
					</div>
				))}
			</section>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	followers: user.followers,
});

export default connect(mapStateToProps)(FollowersList);
