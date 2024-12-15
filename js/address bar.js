const home = document.getElementById('home-page');
const homeM = document.getElementById('home-page-m');
const tournament = document.getElementById('tournament-page');
const tournamentM = document.getElementById('tournament-page-m');
const matches = document.getElementById('matches-page');
const matchesM = document.getElementById('matches-page-m');

home.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/home');

});
homeM.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/home');

});
tournament.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/tournament');

});
tournamentM.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/tournament');

});
matches.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/matches');

});
matchesM.addEventListener('click', function(event) {
    
    event.preventDefault();
    history.pushState({}, '', '/matches');
    
});
