import faker from 'faker'

export const generateFakePost = () => {

    return {
        avatarUrl: faker.image.avatar(),
        author: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(),
        description: faker.lorem.sentences()
    }
}