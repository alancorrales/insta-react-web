import faker from 'faker';

export const generateUserPosts = (n = 10, avatarUrl, username) => {
    const posts = []

    for (let i = 0; i < n; i++) {
        posts.push(generateFakePost(i, avatarUrl, username));
    }

    return posts;
}

export const generateFakePost = (seed, avatarUrl, username) => ({
    id: seed,
    avatarUrl,
    author: username,
    imageUrl: `https://picsum.photos/600?random=${seed}`,
    description: faker.lorem.sentences(),
    liked: false,
    likes: Math.trunc(Math.random() * 10)
});