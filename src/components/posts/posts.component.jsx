import React from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/post.component';

import './posts.styles.scss';

const Posts = ({ posts }) => (
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

export default connect(mapStateToProps)(Posts);
