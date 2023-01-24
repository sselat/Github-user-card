const screen = {
    userProfile: document.querySelector('.profile-data'),
    headerData: document.querySelector('header'),
    renderUser(userData) {
        let repositoriesItems = ''
        
        userData.repositories.forEach(repo => repositoriesItems += `<li>
        <a href="${repo.html_url}" target="_blank">
        ${repo.name}<br><br>
        <span>🍴 ${repo.forks_count}</span>
        <span>⭐ ${repo.stargazers_count}</span>
        <span>👁️ ${repo.watchers_count}</span>
        <span>💻 ${repo.language || 'None'}</span>
        </a>
        
        </li>`)

        let userEvents = ''
         userData.events.forEach(event => {
            if(event.type === 'CreateEvent'){
                userEvents += `<li><p>${event.repo.name} | <span>Criação de Repositório</span></p></li>`
            } else {
                userEvents += `<li><p>${event.repo.name} | <span>${event.payload.commits[0].message}</span></p></li>`
            }
        })
        this.headerData.innerHTML += '<hr>'
        this.userProfile.innerHTML = 
            `<div class="info">
                <img src="${userData.avatarUrl}}" alt="Foto de perfil do usuário">
                <div class="data">
                    <h1>${userData.name ?? 'Não possui nome cadastrado &#128546;'}</h1>
                    <p>${userData.bio ?? 'Não possui bio cadastrada &#128546;'}</p>
                    <br><hr><br>
                    <span class="material-symbols-outlined">
                    groups
                    </span>
                    <p>Seguidores: <span>${userData.followers ?? 'Não possui seguidores &#128546;'}</span></p>
                    <p>Seguindo: <span>${userData.following ?? 'Não está seguindo ninguém &#128546;'}</span></p>
                </div>
            </div>`
        
        if(userData.repositories.length > 0){
            this.userProfile.innerHTML += 
            `
            <div class="repositories">
            <br>
                <h1>Repositórios</h1>
                <ul>
                ${repositoriesItems}
                </ul>
            </div>
            `
        }
        if(userData.events.length > 0){
            this.userProfile.innerHTML += 
            `
            <div class="events">
            <br>
                <h1>Últimos Eventos</h1>
                <ul>
                ${userEvents}
                </ul>
            </div>
            `
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }