import faker from 'faker';

export const generatePosts = (n = 10) => {
    const posts = []

    for (let i = 0; i < n; i++) {
        posts.push(generateFakePost(i));
    }

    return posts;
}

export const generateFakePost = (seed) => ({
    id: seed,
    avatarUrl: faker.image.avatar(),
    author: faker.internet.userName(),
    imageUrl: `https://picsum.photos/600?random=${seed}`,
    description: faker.lorem.sentences()
});