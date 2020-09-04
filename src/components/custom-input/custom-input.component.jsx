import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ value, handleChange, ...otherProps }) => (
	<textarea
		value={value}
		onChange={handleChange}
		className='custom-input'
		{...otherProps}
	></textarea>
);

export default CustomInput;
