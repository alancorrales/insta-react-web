import React from 'react';

import './like-button.styles.scss';

import { ReactComponent as HeartFill } from '../../assets/heart-solid.svg';
import { ReactComponent as HeartOutline } from '../../assets/heart-regular.svg';

const LikeButton = ({ liked, ...otherProps }) =>
	liked ? (
		<HeartFill fill='#ed4956' className='like-button' {...otherProps} />
	) : (
		<HeartOutline fill='#262626' className='like-button' {...otherProps} />
	);

export default LikeButton;
