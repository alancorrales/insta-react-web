import React from 'react';
import { connect } from 'react-redux';

import './posts.styles.scss';

import Post from '../../components/post/post.component';

const Posts = ({ posts }) => (
	<div className='posts'>
		{posts.map((post) => (
			<Post key={post.id} post={post} />
		))}
	</div>
);

const mapStateToProps = ({ posts }) => ({
	posts: posts.posts,
});

export default connect(mapStateToProps)(Posts);
