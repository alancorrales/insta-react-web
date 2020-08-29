import React from 'react';

import './profile-dropdown.styles.scss';
import { NavLink } from 'react-router-dom';

const ProfileDropdown = () => (
	<div className='dropdown'>
		<NavLink className='dropdown-item' to='/profile'>
			<span className='material-icons'>person</span>
			<p className='profile-link'>Profile</p>
		</NavLink>
		<NavLink className='dropdown-item' to='/'>
			<span className='material-icons'>exit_to_app</span>
			<p className='profile-link'>Log out</p>
		</NavLink>
	</div>
);

export default ProfileDropdown;
