import faker from 'faker';

export const generateRandomPosts = (n = 10) => {
    const posts = []

    for (let i = 0; i < n; i++) {
        posts.push({
            id: i,
            avatarUrl: faker.image.avatar(),
            author: getUsername(),
            imageUrl: `https://picsum.photos/600?random=${i}`,
            description: faker.lorem.sentences(),
            liked: false,
            likes: faker.random.number(100),
            comments: generateRandomComments(faker.random.number(30))
        });
    }

    return posts;
}

export const generateRandomComments = (n = 10) => {
    const comments = [];
    let likesPerComment = [];

    for (let i = 0; i < n; i++) {
        likesPerComment.push(faker.random.number(100));
    }

    likesPerComment = likesPerComment.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        comments.push({
            id: faker.random.uuid(),
            avatarUrl: faker.image.avatar(),
            author: getUsername(),
            description: faker.hacker.phrase(),
            liked: false,
            likes: likesPerComment[i],
        });
    }

    return comments;
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
        const following = generatingFollowing ? true : faker.random.boolean();
        contacts.push({
            id: uniqueID,
            name: fullName,
            username: getUsername(fullName),
            avatar: `https://picsum.photos/600?random=${uniqueID}`,
            following,
        });
    }

    return contacts;
};


export const getUsername = (fullName) => {
    const _fullName = fullName ? fullName : faker.name.findName();

    const firstName = _fullName.split(' ')[0];
    const lastName = _fullName.split(' ')[-1];
    const username = faker.internet.email(firstName, lastName).split('@')[0].toLowerCase().replace('.', '');

    return username

}