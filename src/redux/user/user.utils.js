
export const toggleFollowFromFollowers = (followers, user) => (
    followers.map((follower) => follower.id !== user.id ?
        { ...follower } :
        { ...follower, following: !user.following }))

export const toggleFollowFromFollowing = (followingList, user) => (
    user.following ?
        followingList.filter(({ id }) => id !== user.id) :
        [...followingList, user])