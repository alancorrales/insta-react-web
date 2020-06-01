import faker from 'faker'

export const generateFakePost = (seed) => {

    return {
        avatarUrl: faker.image.avatar(),
        author: faker.internet.userName(),
        imageUrl: `https://picsum.photos/600?random=${seed}`,
        description: faker.lorem.sentences()
    }
}