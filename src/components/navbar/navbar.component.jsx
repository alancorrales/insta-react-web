import React from 'react';

import './navbar.styles.scss';

function Navbar() {
	return (
		<div className='navbar'>
			<img
				width='32px'
				height='32px'
				src={`${process.env.PUBLIC_URL}/camera-icon.svg`}
				alt='Camera icon'
			/>
			<h3>InstaReact</h3>
		</div>
	);
}

export default Navbar;
