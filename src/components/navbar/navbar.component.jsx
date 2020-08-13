import React from 'react';
import { connect } from 'react-redux';

import './navbar.styles.scss';

const Navbar = ({ user }) => (
	<nav className='navbar'>
		<div className='navbar-content'>
			<h1 className='brand'>InstaReact</h1>
			<img className='profile-picture' src={user.avatar} alt='profile' />
		</div>
	</nav>
);

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(Navbar);
