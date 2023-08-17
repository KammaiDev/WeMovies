const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM2Njg4NzVjMTg4OTVhYWZlN2YxNTA0ZGYyNGFlZCIsInN1YiI6IjY0ZGQ3ODQ1Yjc3ZDRiMTEzZmM1ODc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57UrtbuGonCbHNYOkl3j1QtjOmloEpALXtuTOT1zhRI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));