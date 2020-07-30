import React from 'react';

import './navbar.styles.scss';

const Navbar = () => (
	<nav className='navbar'>
		<div className='navbar-content'>
			<h1 className='brand'>InstaReact</h1>
			<img
				className='profile-picture'
				src={`https://picsum.photos/32`}
				alt='profile'
			/>
		</div>
	</nav>
);

export default Navbar;
