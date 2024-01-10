const API = {
    url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=373a5b557b13f943de4b25f68ed22de7",
    search : "https://api.themoviedb.org/3/search/movie?api_key=373a5b557b13f943de4b25f68ed22de7&query=",
    img : "https://image.tmdb.org/t/p/w500"
}

const searchBox = document.querySelector(".searchBox input");
const movieBox = document.querySelector(".movieCard");
searchBox.addEventListener("keyup", () => {
        // console.log(searchBox.value);
        if(searchBox.value != ''){
            getMovies(API.search + searchBox.value);
        }else{
            getMovies(API.url);
        }
    });

const getMovies = async(api) => {
    const response = await fetch(api);
    const data = await response.json();
    showMovies(data.results);
}
const showMovies = (data) => {
    movieBox.innerHTML = "";
   data.forEach(
    (item) => {
        console.log(item);
        const box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = `
        <img src="${API.img + item.poster_path}" alt="">
        <div class="details">
            <h1 class="movieName">${item.original_title}</h1>
            <span>${item.vote_average}</span>
            <h2>Overview</h2>
            <p>${item.overview}</p>
        </div>
        `
        movieBox.appendChild(box)
    }
    )
}

getMovies(API.url);
