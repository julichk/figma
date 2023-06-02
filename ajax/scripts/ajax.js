const apiKey = 'cc85430c'; 
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

const form = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const typeSelect = document.querySelector(".type-select");
const filmList = document.querySelector(".film-list");
const pagination = document.querySelector(".pagination");
const filmDetails = document.querySelector(".film-details");

let currentPage = 1;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchName = searchInput.value;
  const movieType = typeSelect.value;
  currentPage = 1; 
  await searchFilms(searchName, movieType);
});

const notFound = document.querySelector(".error");
const searchFilms = async (searchMovie, movieType) => {
  try {
    const resp = await axios.get(`${baseUrl}&s=${searchMovie}&type=${movieType}&page=${currentPage}`);
    const films = resp.data.Search;
      displayFilms(films);
      updatePaginationButtons(resp.data.totalResults);
      notFound.textContent = "";
  } catch (error) {
    notFound.textContent = 'Movie not found!';
  }
};

const displayFilms = (films) => {
  filmList.innerHTML = ""; 
  films.forEach((film) => {
    const filmItem = document.createElement("li");
    const filmTitle = document.createElement("h2");
    filmTitle.textContent = film.Title;
    const poster = document.createElement("img");
    poster.src = film.Poster;
    
    filmTitle.classList.add("film_title");
    filmItem.appendChild(filmTitle);
    poster.classList.add("film_poster");
    filmItem.appendChild(poster);
    filmList.appendChild(filmItem);

    //button for details
    const buttonDetails = document.createElement("button");
    buttonDetails.textContent = "Details";
    buttonDetails.addEventListener("click", () => {
      showFilmDetails(film.imdbID);
    });
    filmItem.appendChild(buttonDetails);
  });
};

const updatePaginationButtons = (allResults) => {
  const allPages = Math.ceil(allResults / 10);
  pagination.innerHTML = "";
    for (let i = 1; i <= allPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", async () => {
    currentPage = i; //current page
    await searchFilms(searchInput.value, typeSelect.value);
  });
  pagination.appendChild(button);
  }
};

const showFilmDetails = async (imdbID) => {
  try {
    const resp = await axios.get(`${baseUrl}&i=${imdbID}`);
    const film = resp.data;
    displayFilmDetails(film);
  } catch (error) {
    console.error('details are not defined', error);
  }
};

const displayFilmDetails = (film) => {
  filmDetails.innerHTML = "";

  const filmTitle = document.createElement("h2");
  filmTitle.textContent = film.Title;
  filmDetails.appendChild(filmTitle);
        
  const filmPoster = document.createElement("img");
  filmPoster.src = film.Poster;
  filmDetails.appendChild(filmPoster);
        
  const filmYear = document.createElement("p");
  filmYear.textContent = `Year: ${film.Year}`;
  filmDetails.appendChild(filmYear);
        
  const filmGenre = document.createElement("p");
  filmGenre.textContent = `Genre: ${film.Genre}`;
  filmDetails.appendChild(filmGenre);
        
  const filmPlot = document.createElement("p");
  filmPlot.textContent = `Plot: ${film.Plot}`;
  filmDetails.appendChild(filmPlot);
};

