import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ active, children, ...otherProps }) => (
	<button
		className={`custom-button ${active ? 'active' : 'inactive'}`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
