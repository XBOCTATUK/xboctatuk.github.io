const pages = [
    { id: 'home-page', address: '/home' },
    { id: 'home-page-m', address: '/home' },
    { id: 'tournament-page', address: '/tournament' },
    { id: 'tournament-page-m', address: '/tournament' },
    { id: 'matches-page', address: '/matches' },
    { id: 'matches-page-m', address: '/matches' },
    { id: 'home-page-logo', address: '/home' }
];

pages.forEach(({ id, address }) => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            history.pushState({}, '', address);
        });
    }
});