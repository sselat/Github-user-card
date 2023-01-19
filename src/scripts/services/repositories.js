import { baseUrl, repoQuantity } from '../variables.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repoQuantity}`)
    return await response.json()
}

export { getRepos }