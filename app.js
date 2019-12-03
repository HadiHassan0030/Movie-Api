let input = document.querySelector('input');
let h1 = document.querySelector('h1');
// h1.parentElement.removeChild(h1)
let d;
// let poster = 'image.tmdb.org/t/p/w500'
let poster = 'http://image.tmdb.org/t/p/w300/'
let url = 'https://api.themoviedb.org/3/search/person?api_key=fa78aa4e43bd03b2ef17cff7e63aca09&query='

history.pushState({ id: '' }, '', '' + 'search-page');
let searchPage = document.getElementById('search-page');
let actorPage = document.getElementById('actor-page');
let moviePage = document.getElementById('movie-page');
let movieInfo = document.getElementById('movie-info');


searchPage.classList.add('active')
d = 'searchPage'





let div = document.createElement('div');
div.id = 'lol';
document.getElementById('actor-page').appendChild(div)






let div2 = document.createElement('div');
div2.id = 'lol2';
document.getElementById('movie-page').appendChild(div2);



function myFunction() {
    console.log(history.state)











    t = input.value;
    input.value = '';



    fetch(url + t)
        .then((res) => {


            return res.json()




        }).then((data) => {









            let actorPic = poster + data.results[0].profile_path;
            let img = document.createElement('img');
            img.className = 'po'

            img.src = actorPic;
            document.getElementById('lol').appendChild(img)

            let actorName = data.results[0].name;
            let h3 = document.createElement('h3');
            h3.textContent = actorName;
            document.getElementById('lol').appendChild(h3)
                // h3.addEventListener('click', () => {
                //     console.log('dk')
                //     history.go();
                // })


            let h = document.createElement('h3');
            h.textContent = actorName + ' Movies:';
            document.getElementById('lol2').appendChild(h)


            // let twoh3 = document.createElement('h3');
            // twoh3.textContent = actorName + "'s movies!";
            // twoh3.id = 'dk'
            // document.getElementById('movie-page').appendChild(twoh3)



            let button = document.createElement('button');
            button.id = 'showMovies'
            button.textContent = 'SHOW MOVIES';
            document.getElementById('lol').appendChild(button)








            console.log(data.results[0].name);







            // window.addEventListener('popstate', e => {
            //     selctedpage(e.state.id);
            //     console.log('pod')
            // })




            actorPage.classList.remove('active');
            movieInfo.style.display = 'none'
            searchPage.style.display = 'none';
            actorPage.classList.add('active');
            d = 'actorPage'

            history.pushState({ id: '' }, '', '' + 'actor-page');


            button.addEventListener('click', () => {



                movieInfo.style.display = 'none'


                actorPage.classList.remove('active');
                moviePage.classList.add('active');
                d = 'moviePage'
                history.pushState({ id: '' }, '', '' + 'movie-page');




            });






            for (i in data.results[0].known_for) {















                let img2 = document.createElement('img');
                img2.src = poster + data.results[0].known_for[i].poster_path;
                document.getElementById('lol2').appendChild(img2);

                let a = document.createElement('a');
                a.textContent = data.results[0].known_for[i].title;
                document.getElementById('lol2').appendChild(a)

                a.addEventListener('click', () => {
                    movieInfo.style.display = 'inline'
                    moviePage.classList.remove('active');
                    moviePage.style.display = 'none'
                    movieInfo.classList.add('active');
                    history.pushState({ id: '' }, '', '' + 'movie-info');
                    d = 'movieInfo'





                });

                a.href = '#';

                let img3 = document.createElement('img');
                img3.src = poster + data.results[0].known_for[i].poster_path;
                document.getElementById('movie-info').appendChild(img3);


                let p2 = document.createElement('p')
                p2.textContent = data.results[0].known_for[i].name;
                document.getElementById('movie-info').appendChild(p2)

                let p3 = document.createElement('p')
                p3.textContent = "DESCRIPTION: " + data.results[0].known_for[i].overview;
                document.getElementById('movie-info').appendChild(p3)

                let p4 = document.createElement('p')
                p4.textContent = "RELEASE DATE: " + data.results[0].known_for[i].release_date;
                document.getElementById('movie-info').appendChild(p4)








            }

            let back = document.getElementById('just');

            back.addEventListener('click', () => {
                actorPage.classList.remove('active');
                actorPage.style.display = 'none';


                movieInfo.classList.remove('active');
                movieInfo.style.display = 'none';


                moviePage.classList.remove('active');
                moviePage.style.display = 'none';


                searchPage.classList.add('active');
                searchPage.style.display = 'inline';




            })












        }).catch((e) => {
            console.log(e)
        })

    kd()








}

console.log(window.location.href)





function kd() {
    window.addEventListener('popstate', () => {



        if (d == 'actorPage') {
            if (history.go) {
                actorPage.classList.remove('active');
                actorPage.style.display = 'none';
                searchPage.style.display = 'inline';

                searchPage.classList.add('active');
            }
        } else if (d == 'moviePage') {
            if (history.go) {
                moviePage.classList.remove('active');
                moviePage.style.display = 'none';
                actorPage.style.display = 'inline';

                actorPage.classList.add('active');
            }
        } else if (d == 'movieInfo') {
            if (history.go) {
                movieInfo.classList.remove('active');
                movieInfo.style.display = 'none';
                movieInfo.style.display = 'inline';

                movieInfo.classList.add('active');
            }
        }








    })
}




// window.addEventListener('popstate', () => {
//     console.log('poped');
//     console.log(window.location.href)

// })



// actorPage.addEventListener('click', () => {
//     moviePage.style.display = 'none'
// })



// let pages = Array.from(document.getElementsByClassName('page'))

// function selctedpage(id) {
//     console.log(id)
//         // searchPage.style.display = 'none'
//     actorPage
//     moviePage
//     movieInfo

// }

// pages.forEach(e => {

//     let id = e.id;
//     e.addEventListener('click', () => {
//         history.pushState({ id }, '' + id, '' + id);

//         selctedpage(id)
//     })
// })

// window.addEventListener('popstate', e => {
//     selctedpage(e.state.id);
//     console.log('pod')
// })