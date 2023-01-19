import { getRepos } from './services/repositories.js'
import { getUser } from './services/user.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', getNameFromInput)
document.getElementById('input-search').addEventListener('keyup', (event) => { event.key === 'Enter' ? getNameFromInput() : '' })

function getNameFromInput() {
    let userName = document.getElementById('input-search').value
    getUserProfile(userName)
}

async function getUserProfile(userName) {
    const userResponse = await getUser(userName)
    user.setInfo(userResponse)

    screen.renderUser(user)
}

// function getUserRepositories(userName) {
//     getRepos(userName).then(reposData => {
//         let repositoriesItems = ""
//         reposData.forEach(repo => {
//             repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
//         })
//         document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
//                                                                 <h2>Repositórios</h2>
//                                                                 <ul>${repositoriesItems}</ul>
//                                                             </div>`
//     })
// }