const API_URL = 'https://starwars.egghead.training/'

const content = document.getElementById('content')
const spinner = document.getElementById('spinner')

function formatFilmData(films){
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title} directed by ${film.director} in ${film.release_date}`)
        .join('\n')
}

fetch(API_URL + 'movies')
    .then(response => {
        if(!response.ok){
            return Promise.reject(new Error('Unsuccessful response'))
        }
        return response.json()
            .then(films => {
                content.innerText = formatFilmData(films);
                return films;
            })
    })
    .catch(error => {
        console.warn('Oops', error)
        content.innerText = "Could not load Star Wars data :( \n Please contact the webmaster";
        return []
    })
    .finally(() => {
        spinner.remove()
    })
    .then(films => {
        console.log('Seeing films cuz we have returned', films)
    })