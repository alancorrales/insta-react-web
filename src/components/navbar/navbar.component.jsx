import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = ({ user }) => (
	<nav className='navbar'>
		<div className='navbar-content'>
			<NavLink className='brand-link' to='/'>
				<h1 className='brand-text'>InstaReact</h1>
			</NavLink>
			<img className='profile-picture' src={user.avatar} alt='profile' />
		</div>
	</nav>
);

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(Navbar);
