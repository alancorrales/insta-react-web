import React from 'react';

import './like-button.styles.scss';

import { ReactComponent as HeartFill } from '../../assets/heart-solid.svg';
import { ReactComponent as HeartOutline } from '../../assets/heart-regular.svg';

const LikeButton = ({ liked }) =>
	liked ? (
		<HeartFill fill='#ed4956' className='like-button' />
	) : (
		<HeartOutline fill='#262626' className='like-button' />
	);

export default LikeButton;
