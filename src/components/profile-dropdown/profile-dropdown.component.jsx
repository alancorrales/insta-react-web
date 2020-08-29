import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './profile-dropdown.styles.scss';

const ProfileDropdown = ({ anchorEl, handleClose }) => (
	<Menu
		id='profile-menu'
		anchorEl={anchorEl}
		keepMounted
		getContentAnchorEl={null}
		anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		transformOrigin={{ vertical: 'top', horizontal: 'right' }}
		open={Boolean(anchorEl)}
		onClose={handleClose}
	>
		<MenuItem onClick={handleClose} component={NavLink} to='/profile'>
			<ListItemIcon>
				<span className='material-icons'>person</span>
			</ListItemIcon>
			<ListItemText primary='Profile' />
		</MenuItem>
		<MenuItem onClick={handleClose} component={NavLink} to='/#'>
			<ListItemIcon>
				<span className='material-icons'>exit_to_app</span>
			</ListItemIcon>
			<ListItemText primary='Log out' />
		</MenuItem>
	</Menu>
);

export default ProfileDropdown;
