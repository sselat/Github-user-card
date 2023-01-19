const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData) {
        
        let repositoriesItems = ''
        userData.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        this.userProfile.innerHTML = 
            `<div class="info">
                <img src="${userData.avatarUrl}}" alt="Foto de perfil do usuário">
                <div class="data">
                    <h1>${userData.name ?? 'Não possui nome cadastrado &#128546;'}</h1>
                    <p>${userData.bio ?? 'Não possui bio cadastrada &#128546;'}</p>
                </div>
            </div>`
        
        if(userData.repositories.length > 0){
            this.userProfile.innerHTML += 
            `
            <div class="repositories">
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