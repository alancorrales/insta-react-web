import React from 'react';

import Post from '../../components/post/post.component';

import { generateFakePost } from './../../App.utils';

import './home.styles.scss';

const NUMBER_OF_POSTS = 10;

export default class HomePage extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		const posts = [];

		for (let i = 0; i < NUMBER_OF_POSTS; i++) {
			posts.push(generateFakePost(i));
		}

		this.setState({ posts });
	}

	render() {
		return (
			<div className='posts'>
				{this.state.posts.map((post, i) => (
					<Post key={i} data={post} />
				))}
			</div>
		);
	}
}
