import { getRepos } from './services/repositories.js'
import { getUser } from './services/user.js'
import { getEvents } from './services/events.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', getNameFromInput)
document.getElementById('input-search').addEventListener('keyup', (event) => { event.key === 'Enter' ? getNameFromInput() : '' })

function getNameFromInput() {
    let userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
}

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com um nome de usuário do GitHub!')
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepos(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
}