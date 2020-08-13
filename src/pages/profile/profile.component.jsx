import React from 'react';
import { connect } from 'react-redux';

import './profile.styles.scss';

const ProfilePage = ({
	user: { username, name, avatar, followers, following, posts },
}) => (
	<div className='container'>
		<div className='profile'>
			<img className='image' src={avatar} alt='profile' />
			<div className='user-info'>
				<h3 className='username'>{username}</h3>
				<div className='stats'>
					<p>
						<span className='bold'>{posts.length}</span> posts
					</p>
					<p>
						<span className='bold'>{followers.length}</span> followers
					</p>
					<p>
						<span className='bold'>{following.length}</span> following
					</p>
				</div>
				<h4>{name}</h4>
			</div>
		</div>
		<div className='profile-posts'>
			{posts.map((post) => (
				<img className='profile-post' src={post.imageUrl} alt='post' />
			))}
		</div>
	</div>
);
const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
