import { baseUrl, repoQuantity } from '../variables.js'

async function getEvents(userName) {
    const response = await (await fetch(`${baseUrl}/${userName}/events`)).json()
    const filteredResponse = await response.filter((item) => {
        if(item.type === 'PushEvent' || item.type === 'CreateEvent'){
            return item
        }
    })
    return await filteredResponse.slice(0, 10)
}

export { getEvents }