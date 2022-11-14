/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  showUsers(ENDPOINT)
})

const showUsers = (url) => {
  const message = document.querySelector('#message')
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then((data) => {
      message.remove()
      createUserCards(data)
    })
    .catch((e) => {
      message.textContent = e.message
    })
}

const createUserCards = (users) => {
  const display = document.querySelector('#output')
  users.forEach((user) => {
    const userWrapper = document.createElement('div')
    userWrapper.classList.add('card')

    const username = document.createElement('p')
    username.textContent = user.login
    const userAvatar = document.createElement('img')
    userAvatar.src = user.avatar_url

    userWrapper.append(userAvatar, username)
    display.append(userWrapper)
  })
}
