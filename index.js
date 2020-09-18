function saveToWatchList(imdbID){
  // console.log(imdbID);
  const movie = movieData.find((currentMovie) =>{
    return currentMovie.imdbID == imdbID;
  });

  let watchListJSON = localStorage.getItem('watchList');
  let watchList = JSON.parse(watchListJSON);

  if (!watchList){watchList = [];}
  watchList.push(movie);

  watchListJSON = JSON.stringify(watchList);

  localStorage.setItem('watchList', watchListJSON)

  console.log(localStorage.getItem('watchList'));
}

function deleteFromWatchList(){
  localStorage.removeItem('watchList')
}

document.addEventListener('DOMContentLoaded', function(){

    
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
                <button class="btn btn-primary m-1 p-1 addButton" id="${currentMovie.imdbID}" style="font-size: .75rem; height: 2rem;" onClick="saveToWatchList('${currentMovie.imdbID}')">Add</button>
              </div>
            </div>
          </div>
            `
        });
        return movieHtmlArray.join('');
    }

    document.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target.id === 'search'){
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = renderMovies(movieData);
            deleteFromWatchList();
        }
    })
    
})

