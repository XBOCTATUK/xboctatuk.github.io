const home = document.getElementById('home-page');

home.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/home');

    // Здесь вы можете добавить код для обновления содержимого страницы, если это необходимо
    // Например, чтобы загружать соответствующие данные для "/matches"
});
