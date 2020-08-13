import React from 'react';
import { connect } from 'react-redux';

import './profile.styles.scss';

const ProfilePage = ({
	user: { username, avatar, followers, following, posts },
}) => (
	<div>
		<div className='profile'>
			<div className='image'>
				<img src={avatar} alt='profile' />
			</div>
			<div className='user-info'>
				{username}
				{followers.length}
				{following.length}
			</div>
		</div>
		<div className='posts'></div>
	</div>
);
const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
