let movieData;
// function that takes in the movie we want to add to our localStorage
function addMovieToLocalStorage(movie, imdbID){

  let watchListJSON = localStorage.getItem('watchList');
  let watchList = JSON.parse(watchListJSON);
  
  // checks if watchList exists, if it doesn't, we initiate the empty array.
  if (!watchList){watchList = [];}
  const isMovieInListAlready = watchList.find((watchListMovie)=> {
    // checks if there is one first, then if they are the same.
    return watchListMovie.imdbID && watchListMovie.imdbID == imdbID;
  })
  if (!isMovieInListAlready){
    watchList.push(movie);
  }

  watchListJSON = JSON.stringify(watchList);

  localStorage.setItem('watchList', watchListJSON)

}

// function to add a movie to our local storage if the user clicks the add button
function saveToWatchList(imdbID){
  const movie = movieData.find((currentMovie) =>{
    return currentMovie.imdbID == imdbID;
  });

  addMovieToLocalStorage(movie, imdbID);

  console.log(localStorage.getItem('watchList'));
}

function deleteFromWatchList(){
  localStorage.removeItem('watchList')
}

function renderMovies(movieArray){
  const movieHtmlArray = movieArray.map((currentMovie) => {

      return `
      <div class="movie mr-1 mt-1 col-3">
      <div class="card">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
        <div class="card-body d-flex justify-content-around p-0 mt-1">
          <h7 class="card-title" id="movie-title" style="font-size: .75rem;">${currentMovie.Title}</h7>
          <p class='btn btn-secondary' id='movie-year' style="font-size: .75rem; padding: 0; margin: 0; height: 1.25rem;">${currentMovie.Year}</p>
        </div>
        <div class="card-body d-flex justify-content-center" style="padding: 0; margin: 0;">
          <button class="btn btn-primary m-1 p-1 addButton" id="addButton" style="font-size: .75rem; height: 2rem;" onClick="saveToWatchList('${currentMovie.imdbID}')">Add</button>
        </div>
      </div>
    </div>
      `
  });
  return movieHtmlArray.join('');
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', (e)=>{
        if(e.target.id !== 'navLink'){
          e.preventDefault();
          let searchString = $('.search-bar').val();
          let urlEncodedSearchString = encodeURIComponent(searchString);
          if(e.target.id === 'search'){
              const movieContainer = document.querySelector('.movie-container');
              axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=bc114e0b&s=" + urlEncodedSearchString)
                .then((response)=>{
                  movieContainer.innerHTML = renderMovies(response.data.Search);
                  movieData = response.data.Search;
                })
          }else if(e.target.id === 'addButton'){
            e.target.style.display = 'none';
          }
        }
    })
    
})

