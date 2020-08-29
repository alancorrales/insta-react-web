import faker from 'faker';

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

export const toggleFollowFromFollowers = (followers, user) => (
    followers.map((follower) => follower.id !== user.id ?
        { ...follower } :
        { ...follower, following: !user.following }))

export const toggleFollowFromFollowing = (followingList, user) => (
    user.following ?
        followingList.filter(({ id }) => id !== user.id) :
        [...followingList, user])