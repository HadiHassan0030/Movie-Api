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

                                // type.textContent = "Type: " + data.results[di.id].known_for[d].media_type;
                                // overview.textContent = "Discription: " + data.results[di.id].known_for[d].overview;
                                // movieName.textContent = "Name: " + data.results[di.id].known_for[d].name;
                                // rating.textContent = "Rating: " + data.results[di.id].known_for[d].vote_average;
                                // releaseDate.textContent = "Release Date: " + data.results[di.id].known_for[d].release_date;

                                // // document.getElementById('movie-info').appendChild(movieCard2).appendChild(movieImg)
                                // document.getElementById('movie-info').appendChild(movieCard).appendChild(type)
                                // document.getElementById('movie-info').appendChild(movieCard).appendChild(movieName)
                                // document.getElementById('movie-info').appendChild(movieCard).appendChild(overview)
                                // document.getElementById('movie-info').appendChild(movieCard).appendChild(rating)
                                // document.getElementById('movie-info').appendChild(movieCard).appendChild(releaseDate)





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







                // console.log(poster + data.results[i].profile_path);
            }

            // console.log(data.results)












            // let actorPic = poster + data.results[0].profile_path;
            // let img = document.createElement('img');
            // img.className = 'po'

            // img.src = actorPic;
            // document.getElementById('lol').appendChild(img)

            // let actorName = data.results[0].name;
            // let h3 = document.createElement('h3');
            // h3.textContent = actorName;
            // document.getElementById('lol').appendChild(h3)
            //     // h3.addEventListener('click', () => {
            //     //     console.log('dk')
            //     //     history.go();
            //     // })


            // let h = document.createElement('h3');
            // h.textContent = actorName + ' Movies:';
            // document.getElementById('lol2').appendChild(h)


            // // let twoh3 = document.createElement('h3');
            // // twoh3.textContent = actorName + "'s movies!";
            // // twoh3.id = 'dk'
            // // document.getElementById('movie-page').appendChild(twoh3)



            // let button = document.createElement('button');
            // button.id = 'showMovies'
            // button.textContent = 'SHOW MOVIES';
            // document.getElementById('lol').appendChild(button)








            // console.log(data.results[0].name);







            // // window.addEventListener('popstate', e => {
            // //     selctedpage(e.state.id);
            // //     console.log('pod')
            // // })




            // actorPage.classList.remove('active');
            // movieInfo.style.display = 'none'
            // searchPage.style.display = 'none';
            // actorPage.classList.add('active');
            // d = 'actorPage'

            // history.pushState({ id: '' }, '', '' + 'actor-page');


            // button.addEventListener('click', () => {



            //     movieInfo.style.display = 'none'


            //     actorPage.classList.remove('active');
            //     moviePage.classList.add('active');
            //     d = 'moviePage'
            //     history.pushState({ id: '' }, '', '' + 'movie-page');




            // });






            // for (i in data.results[0].known_for) {















            //     let img2 = document.createElement('img');
            //     img2.src = poster + data.results[0].known_for[i].poster_path;
            //     document.getElementById('lol2').appendChild(img2);

            //     let a = document.createElement('a');
            //     a.textContent = data.results[0].known_for[i].title;
            //     document.getElementById('lol2').appendChild(a)

            //     a.addEventListener('click', () => {
            //         movieInfo.style.display = 'inline'
            //         moviePage.classList.remove('active');
            //         moviePage.style.display = 'none'
            //         movieInfo.classList.add('active');
            //         history.pushState({ id: '' }, '', '' + 'movie-info');
            //         d = 'movieInfo'





            //     });

            //     a.href = '#';

            //     let img3 = document.createElement('img');
            //     img3.src = poster + data.results[0].known_for[i].poster_path;
            //     document.getElementById('movie-info').appendChild(img3);


            //     let p2 = document.createElement('p')
            //     p2.textContent = data.results[0].known_for[i].name;
            //     document.getElementById('movie-info').appendChild(p2)

            //     let p3 = document.createElement('p')
            //     p3.textContent = "DESCRIPTION: " + data.results[0].known_for[i].overview;
            //     document.getElementById('movie-info').appendChild(p3)

            //     let p4 = document.createElement('p')
            //     p4.textContent = "RELEASE DATE: " + data.results[0].known_for[i].release_date;
            //     document.getElementById('movie-info').appendChild(p4)








            // }














        }).catch((e) => {
            console.log(e)
        })









}


function hello() {
    history.pushState({ id: '' }, '', '' + '/');
    location.reload()
}