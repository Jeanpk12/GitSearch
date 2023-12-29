import {
    getUser
} from '/src/scripts/user.js'

import {
    getRepositories
} from '/src/scripts/repositories.js'

import {
    user
} from '/src/scripts/objects/user.js'

import {
    screen
} from '/src/scripts/objects/screen.js'

document.querySelector('#btn-search').addEventListener('click', () => {
    const userName = document.querySelector('#input-search').value;
    getUserData(userName)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key =  e.which || e.keycode
    const isEnterKeyPressed =  key === 13;

    if(isEnterKeyPressed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {
    
        const userResponse = await getUser(userName)
        const repositoriesResponse = await getRepositories(userName)
        
        user.setInfo(userResponse)
        user.setRepositories(repositoriesResponse)

        screen.renderUser(user)
}
