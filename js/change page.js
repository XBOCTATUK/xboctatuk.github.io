const homePage = document.querySelector('.content')
const navButtons = document.querySelectorAll('.nav-links')

navButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault()

    history.pushState({}, '', '')

    btnId = btn.getAttribute('id')
    if (btnId in ['home-page', 'home-page-m', 'home-page-logo']) {

    }
  })
})

// setTimeout(() => {
//   loadContent = () => {
//     fetch('./html/matches.html')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('response is not ok')
//         }
//         return response.text()
//       })
//       .then(data => {
//         const parser = new DOMParser()
//         const innerPage = parser.parseFromString(data, 'text/html')
//         console.log(innerPage.querySelector('.content'))
//         homePage.innerHTML = innerPage.querySelector('.content').innerHTML
//       })
//       .catch(error => {
//         console.error('Файл не загружен:', error)
//       })
//   }
//   loadContent()
//
//   setTimeout(() => {
//     loadContent = () => {
//       fetch('index.html')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('response is not ok')
//           }
//           return response.text()
//         })
//         .then(data => {
//           const parser = new DOMParser()
//           const innerPage = parser.parseFromString(data, 'text/html')
//           console.log(innerPage.querySelector('.content'))
//           homePage.innerHTML = innerPage.querySelector('.content').innerHTML
//         })
//         .catch(error => {
//           console.error('Файл не загружен:', error)
//         })
//     }
//     loadContent()
//   }, 5000)
// }, 5000)
