const API_URL = 'https://starwars.egghead.training/'

const content = document.getElementById('content')
const spinner = document.getElementById('spinner')

function formatFilmData(films){
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title} directed by ${film.director} in ${film.release_date}`)
        .join('\n')
}

async function queryAPI(endpoint){
    const response = await fetch(API_URL + endpoint)
    if(response.ok){
        return response.json()
    }
    throw Error('Unsuccessful response')
}


async function main(){
    try {
        const [films, planets, species] = await Promise.all([
            queryAPI('films'),
            queryAPI('planets'),
            queryAPI('species')
        ]);

        content.innerText =
            `${films.length} films, ${planets.length} planets and ${species.length} species`
    } catch (error) {
        console.warn(error)    
        content.innerText = ":("
    } finally {
        spinner.remove()
    }
}

main()


// Promise.all([
//     queryAPI('films'),
//     queryAPI('planets'),
//     queryAPI('species')
// ]).then(([films, planets, species]) => {    
//     content.innerText =
//     `${films.length} films` + ' ' +
//     `${planets.length} planets` + ' ' +
//     `${species.length} species`
// })
// .catch(error => {
//     console.warn(error)
//     content.innerText = ":("
// })
// .finally(() => spinner.remove())





// fetch(API_URL + 'films')
//     .then(response => {
//         if(!response.ok){
//             return Promise.reject(new Error('Unsuccessful response'))
//         }
//         return response.json()
//             .then(films => {
//                 content.innerText = formatFilmData(films);
//                 return films;
//             })
//     })
//     .catch(error => {
//         console.warn('Oops', error)
//         content.innerText = "Could not load Star Wars data :( \n Please contact the webmaster";
//         return []
//     })
//     .finally(() => {
//         spinner.remove()
//     })
//     .then(films => {
//         console.log('Seeing films cuz we have returned', films)
//     })