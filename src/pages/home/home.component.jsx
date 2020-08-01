import React from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/post.component';

import './home.styles.scss';

const HomePage = ({ posts }) => (
	<div className='posts'>
		{posts.map((post, i) => (
			<Post key={i} data={post} />
		))}
	</div>
);

const mapStateToProps = ({ posts }) => {
	return {
		posts: posts.posts,
	};
};

export default connect(mapStateToProps)(HomePage);
