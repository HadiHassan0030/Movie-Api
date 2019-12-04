let input = document.querySelector('input');

let poster = 'http://image.tmdb.org/t/p/w300/'
let url = 'https://api.themoviedb.org/3/search/person?api_key=fa78aa4e43bd03b2ef17cff7e63aca09&query=';
history.pushState({ id: '' }, '', '' + 'search-page');
let searchPage = document.getElementById('search-page');
let actorPage = document.getElementById('actor-page');
let moviePage = document.getElementById('movie-page');
let movieInfo = document.getElementById('movie-info');


searchPage.classList.add('active')











function myFunction() {

    console.log(history.state);












    t = input.value;
    input.value = '';





    fetch(url + t)
        .then((res) => {


            return res.json()




        }).then((data) => {


            searchPage.style.display = 'none'
            searchPage.classList.remove('active')

            moviePage.style.display = 'none'
            movieInfo.style.display = 'none'


            actorPage.classList.add('active')
            actorPage.style.display = 'inline';

            for (i in data.results) {


                let di = document.createElement('div');
                di.id = i;
                di.className = 'actorCard'




                let actorImg = document.createElement('img');
                let actorName = document.createElement('h3');




                actorImg.src = poster + data.results[i].profile_path;
                actorName.textContent = data.results[i].name;


                if (data.results[i].profile_path == null) {
                    actorImg.src = 'noimage.png'
                    document.getElementById('actor-page').insertAdjacentElement('beforeend', actorImg);


                }




                document.getElementById('actor-page').insertAdjacentElement('beforeend', actorImg);
                document.getElementById('actor-page').insertAdjacentElement('beforeend', actorName);
                document.getElementById('actor-page').appendChild(di).appendChild(actorImg)
                document.getElementById('actor-page').appendChild(di).appendChild(actorName)
                    // document.getElementById('ll').appendChild(actorName)
                    // console.log(data.results[i]);








                di.addEventListener('click', () => {

                    let h2 = document.createElement('h2');
                    h2.textContent = data.results[di.id].name + " movies!";
                    document.getElementById('movie-page').appendChild(h2)






                    for (c in data.results[di.id].known_for) {


                        let movieImg = document.createElement('img');
                        let movieName = document.createElement('p');

                        let movieCard = document.createElement('div');

                        movieImg.src = poster + data.results[di.id].known_for[c].backdrop_path;
                        movieName.textContent = data.results[di.id].known_for[c].title;

                        if (data.results[di.id].known_for[c].title == undefined) {
                            movieName.textContent = data.results[di.id].known_for[c].name;



                        }


                        document.getElementById('movie-page').appendChild(movieCard).appendChild(movieImg)
                        document.getElementById('movie-page').appendChild(movieCard).appendChild(movieName)

                        movieCard.addEventListener('click', () => {
                            for (d in data.results[di.id].known_for) {
                                // movieImg.src = poster + data.results[d].known_for[d].backdrop_path;
                                let container = document.createElement('div');
                                let infoImg = document.createElement('img')
                                let name = document.createElement('p');
                                let type = document.createElement('p');
                                let releaseDate = document.createElement('p')
                                let rating = document.createElement('p')
                                let overview = document.createElement('p')

                                name.textContent = "Name: " + data.results[di.id].known_for[d].original_title;
                                if (data.results[di.id].known_for[d].original_title == undefined) {
                                    name.textContent = "Name: " + data.results[di.id].known_for[d].original_name;


                                }
                                overview.textContent = "Discription: " + data.results[di.id].known_for[d].overview;
                                infoImg.src = poster + data.results[di.id].known_for[d].backdrop_path
                                type.textContent = "Type: " + data.results[di.id].known_for[d].media_type;
                                rating.textContent = "Rating: " + data.results[di.id].known_for[d].vote_average;
                                releaseDate.textContent = "Release Date: " + data.results[di.id].known_for[d].release_date;





                                console.log(data.results[di.id].known_for[d].original_title);
                                document.getElementById('movie-info').appendChild(container).appendChild(infoImg);
                                document.getElementById('movie-info').appendChild(container).appendChild(type);
                                document.getElementById('movie-info').appendChild(container).appendChild(name);
                                document.getElementById('movie-info').appendChild(container).appendChild(rating);
                                document.getElementById('movie-info').appendChild(container).appendChild(overview);
                                document.getElementById('movie-info').appendChild(container).appendChild(releaseDate);






                            }



                            moviePage.style.display = 'none'
                            moviePage.classList.remove('active');
                            movieInfo.style.display = 'inline'
                            movieInfo.classList.add('active')



                        })


                    }

                    actorPage.style.display = 'none'
                    actorPage.classList.remove('active');
                    moviePage.style.display = 'inline'
                    moviePage.classList.add('active')





                })







            }























        }).catch((e) => {
            console.log(e)
        })









}


function hello() {
    history.pushState({ id: '' }, '', '' + '/Movie-Api/search-page');
    location.reload()
}