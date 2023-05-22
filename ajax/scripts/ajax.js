const myFilm = document.querySelector(".films");
const catalog = "tt1234567"; //IMDb ID фільму

//додаю фільми на сторінку
const addFilms = (item) => {
  const newMyFilm = document.createElement("li");
  newMyFilm.innerHTML = `
    <h2>${item.Title}</h2>
    <img src="${item.Poster}" alt="">
    `;
  myFilm.appendChild(newMyFilm);
};

//витягую фільми
const baseUrl = `http://www.omdbapi.com/?apikey=cc85430c&i=${catalog}`;
const getFilmDataByAxios = async () => {
  const resp = await axios.get(baseUrl);
  addFilms(resp.data);
};

getFilmDataByAxios();

// const getUsersData = async() => {
//   const apiKey = 'cc85430c';
//   const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
//   const response = await fetch(apiUrl );
//   const jsonData = await response.json();

//   console.log(jsonData)
// };

// const postUser = async(user) => {
//   const response = await fetch(`${baseUrl}/cc85430c`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(user)
//   });
//   return response;
// }
// postUser({name: 'test', age: '20'})
// getUsersData();
