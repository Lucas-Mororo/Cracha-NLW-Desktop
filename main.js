const Modal = {
  close() {
    let getGitHub = document.querySelector('#getGitHub').value
    if (getGitHub) {
      document.querySelector('.modal-overlay').classList.remove('active')
    } else {
      alert('Digite o Login do seu GitHub')
    }
  }
}
const submit = document.querySelector('#submit')

submit.addEventListener('click', function (e) {
  e.preventDefault()
  let getGitHub = document.querySelector('#getGitHub').value
  let getYoutube = document.querySelector('#getYoutube').value
  let getFacebook = document.querySelector('#getFacebook').value
  let getInstagram = document.querySelector('#getInstagram').value
  let getTwitter = document.querySelector('#getTwitter').value

  const LinksSocialMedia = {
    github: getGitHub,
    youtube: getYoutube,
    facebook: getFacebook,
    instagram: getInstagram,
    twitter: getTwitter
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }

  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${getGitHub}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        usernameGitHub.textContent = data.login
        userLink.href = data.html_url
        document.title = `${data.name} - DoWhile 2021`
        userImage.src = data.avatar_url
        userBio.textContent = getUserBio(data.bio)
      })
  }

  function getUserBio(data) {
    if (data.length > 80) {
      data = data.slice(0, 80)
      data += '...'
    }
    return data
  }

  getGitHubProfileInfos()
  changeSocialMediaLinks()
})
