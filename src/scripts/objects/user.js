const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: 0,
    followers: 0,
    repositories: [],
    events: [],
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url 
        this.name = githubUser.name 
        this.bio = githubUser.bio 
        this.userName = githubUser.login
        this.following = githubUser.following
        this.followers = githubUser.followers
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }