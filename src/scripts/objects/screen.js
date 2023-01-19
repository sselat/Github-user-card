const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData) {
        this.userProfile.innerHTML = 
            `<div class="info">
                <img src="${userData.avatarUrl}}" alt="Foto de perfil do usuário">
                <div class="data">
                    <h1>${userData.name ?? 'Não possui nome cadastrado &#128546;'}</h1>
                    <p>${userData.bio ?? 'Não possui bio cadastrada &#128546;'}</p>
                </div>
            </div>`
    }
}

export { screen }