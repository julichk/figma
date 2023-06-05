const apiKey = "cc85430c";
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

const form = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const typeSelect = document.querySelector(".type-select");
const filmList = document.querySelector(".film-list");
const pagination = document.querySelector(".pagination");
const notFound = document.querySelector(".error");

let currentPage = 1;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchName = searchInput.value;
  const movieType = typeSelect.value;
  currentPage = 1;
  await searchFilms(searchName, movieType);
});

const searchFilms = async (searchName, movieType) => {
  try {
    const resp = await axios.get(
      `${baseUrl}&s=${searchName}&type=${movieType}&page=${currentPage}`
    );
    const films = resp.data.Search;
    displayFilms(films);
    updatePaginationButtons(resp.data.totalResults);
    notFound.textContent = "";
  } catch (error) {
    notFound.textContent = "Movie not found!";
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

    // container for details
    const filmDetailsContainer = document.createElement("div");
    filmDetailsContainer.classList.add("film-details-container");

    // button for details
    const buttonDetails = document.createElement("button");
    buttonDetails.textContent = "Details";
    buttonDetails.addEventListener("click", async () => {
      showFilmDetails(film.imdbID, filmDetailsContainer);
    });

    filmItem.appendChild(buttonDetails);
    filmItem.appendChild(filmDetailsContainer);
    filmList.appendChild(filmItem);
  });
};

const updatePaginationButtons = (allResults) => {
  const allPages = Math.ceil(allResults / 10);
  pagination.innerHTML = "";
  for (let page = 1; page <= allPages; page++) {
    const button = document.createElement("button");
    button.textContent = page;
    button.addEventListener("click", async () => {
      currentPage = page; //current page
      await searchFilms(searchInput.value, typeSelect.value);
    });
    pagination.appendChild(button);
  }
};

const showFilmDetails = async (imdbID, containerDetails) => {
  try {
    const resp = await axios.get(`${baseUrl}&i=${imdbID}`);
    const film = resp.data;
    displayFilmDetails(film, containerDetails);
  } catch (error) {
    console.error("details are not defined", error);
  }
};

const displayFilmDetails = (film,containerDetails) => {
  containerDetails.innerHTML = "";

  const filmYear = document.createElement("p");
  filmYear.textContent = `Year: ${film.Year}`;
  containerDetails.appendChild(filmYear);

  const filmGenre = document.createElement("p");
  filmGenre.textContent = `Genre: ${film.Genre}`;
  containerDetails.appendChild(filmGenre);

  const filmPlot = document.createElement("p");
  filmPlot.textContent = `Plot: ${film.Plot}`;
  containerDetails.appendChild(filmPlot);
};



