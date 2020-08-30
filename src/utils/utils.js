import faker from 'faker';

export const generateRandomPosts = (n = 10) => {
    const posts = []

    for (let i = 0; i < n; i++) {
        posts.push({
            id: i,
            avatarUrl: faker.image.avatar(),
            author: faker.internet.userName(),
            imageUrl: `https://picsum.photos/600?random=${i}`,
            description: faker.lorem.sentences(),
            liked: false,
            likes: Math.trunc(Math.random() * 10)
        });
    }

    return posts;
}

export const generateUserPosts = (n = 10, avatarUrl, username) => {
    const posts = []

    for (let i = 0; i < n; i++) {
        const uniqueID = faker.random.uuid();
        const randomSeed = faker.random.number();
        const randomNumberOfLikes = faker.random.number(100);
        const randomLiked = faker.random.boolean();
        posts.push({
            id: uniqueID,
            avatarUrl,
            author: username,
            imageUrl: `https://picsum.photos/600?random=${randomSeed}`,
            description: faker.lorem.sentences(),
            liked: randomLiked,
            likes: randomNumberOfLikes
        });
    }

    return posts;
}

export const generateUserContacts = (n = 10, generatingFollowing = false) => {
    const contacts = [];

    for (let i = 0; i < n; i++) {
        const uniqueID = faker.random.uuid();
        const fullName = faker.name.findName();
        const firstName = fullName.split(' ')[0];
        const lastName = fullName.split(' ')[-1];
        const username = faker.internet.email(firstName, lastName).split('@')[0];
        const following = generatingFollowing ? true : faker.random.boolean();
        contacts.push({
            id: uniqueID,
            name: fullName,
            username,
            avatar: `https://picsum.photos/600?random=${uniqueID}`,
            following,
        });
    }

    return contacts;
};