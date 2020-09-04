import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navbar.styles.scss';

import ProfileDropdown from './../profile-dropdown/profile-dropdown.component';

const Navbar = ({ user }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<nav className='navbar'>
			<div className='navbar-content'>
				<NavLink className='brand-link' to='/'>
					<h1 className='brand-text'>InstaReact</h1>
				</NavLink>
				<div className='profile-context'>
					<img
						className='profile-picture'
						src={user.avatar}
						alt='profile'
						aria-controls='profile-menu'
						aria-haspopup='true'
						onClick={handleClick}
					/>
					<ProfileDropdown anchorEl={anchorEl} handleClose={handleClose} />
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(Navbar);
