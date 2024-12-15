const pages = [
    { id: 'home-page', path: '/home' },
    { id: 'home-page-m', path: '/home' },
    { id: 'tournament-page', path: '/tournament' },
    { id: 'tournament-page-m', path: '/tournament' },
    { id: 'matches-page', path: '/matches' },
    { id: 'matches-page-m', path: '/matches' },
    { id: 'home-page-logo', path: '/home'}
];

pages.forEach(({ id, path }) => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            history.pushState({}, '', path);
        });
    }
});