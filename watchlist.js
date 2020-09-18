const pullFromLocal = ()=> {
    let watchListJSON = localStorage.getItem('watchList');
    let watchList = JSON.parse(watchListJSON);
    
    // checks if watchList exists, if it doesn't, we initiate the empty array.
    if (!watchList){watchList = [];}
    return watchList;
}

// function that takes in the movie we want to add to our localStorage
function removeMovieFromLocalStorage(watchList, movie){
    let deleteIndex;
    for (let index = 0; index < watchList.length; index++){
        if(watchList[index].Title === movie.Title){
            deleteIndex = index;
        }
    }
    watchList.splice(deleteIndex, 1);
    let watchListJSON = JSON.stringify(watchList);
    localStorage.setItem('watchList', watchListJSON)
    return watchList;
  }

function deleteFromWatchList(imdbID){
    // does the opposite from add to watchlist
    let localList = pullFromLocal();
    console.log(localList);
    const movie = localList.find((currentMovie) =>{
        return currentMovie.imdbID == imdbID;
    });

    localList = removeMovieFromLocalStorage(localList, movie);

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = renderMovies(localList);    
}

function renderMovies(movieArray){
    const movieHtmlArray = movieArray.map((currentMovie) => {

        return `
        <div class="movie mr-1 mt-1 col-3">
        <div class="card" style="height: 18rem">
          <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
          <div class="card-body d-flex justify-content-around p-0 mt-1">
            <h7 class="card-title" id="movie-title" style="font-size: .75rem;">${currentMovie.Title}</h7>
            <p class='btn btn-secondary' id='movie-year' style="font-size: .75rem; padding: 0; margin: 0; height: 1.25rem;">${currentMovie.Year}</p>
          </div>
          <div class="card-body d-flex justify-content-center" style="padding: 0; margin: 0;">
            <button class="btn btn-primary m-1 p-1 addButton" id="removeButton" style="font-size: .75rem; height: 2rem;" onClick="deleteFromWatchList('${currentMovie.imdbID}')">Remove</button>
          </div>
        </div>
      </div>
        `
    });
    return movieHtmlArray.join('');
}



document.addEventListener('DOMContentLoaded', function(){
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = renderMovies(pullFromLocal());
})