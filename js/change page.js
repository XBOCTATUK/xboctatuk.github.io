document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.querySelector('.content');
    const navLinks = document.querySelectorAll('.nav-links');

    const loadPage = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('.content').innerHTML;
            })
    };

    navLinks.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()

            const url = e.currentTarget.getAttibute('href');
            loadPage(url)
        });
    });
});