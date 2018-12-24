const API_URL = 'https://starwars.egghead.training/'

const content = document.getElementById('content')

content.innerText = "Fetching Star Wars data.."

function formatFilmData(films){
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title} directed by ${film.director} in ${film.release_date}`)
        .join('\n')
}

fetch(API_URL + 'films')
    .then(response => {
        return response.json().then(films => {
            content.innerText = formatFilmData(films);    
        })
    }).catch(error => {
        console.warn('Oops', error)
        content.innerText = "Could not load Star Wars data :( \n Please contact the webmaster"
    })