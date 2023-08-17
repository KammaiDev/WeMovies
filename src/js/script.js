const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc';

//const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face/${backdrop_path}`

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM2Njg4NzVjMTg4OTVhYWZlN2YxNTA0ZGYyNGFlZCIsInN1YiI6IjY0ZGQ3ODQ1Yjc3ZDRiMTEzZmM1ODc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57UrtbuGonCbHNYOkl3j1QtjOmloEpALXtuTOT1zhRI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

//   async function fetchAsync(url, options) {
//     try {
//         const res = await fetch(url, options);
//         const json = await res.json();
//         console.log(json);
//     } catch (err) {
//         console.error('error: ' + err);
//     }
//   }
// fetchAsync(url, options)