const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData) {
        
        let repositoriesItems = ''
        userData.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        let userEvents = ''
        userData.events.forEach(events => userEvents += `<li><p>${events.repo.name}<span>${events.payload.commits}</span></p></li>`)

        console.log(userEvents)
        this.userProfile.innerHTML = 
            `<div class="info">
                <img src="${userData.avatarUrl}}" alt="Foto de perfil do usuário">
                <div class="data">
                    <h1>${userData.name ?? 'Não possui nome cadastrado &#128546;'}</h1>
                    <p>${userData.bio ?? 'Não possui bio cadastrada &#128546;'}</p>
                    <br><hr><br>
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
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }