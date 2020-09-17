

document.addEventListener('DOMContentLoaded', function(){
    function renderMovies(movieArray){
        const movieHtmlArray = movieArray.map((currentMovie) => {

            console.log(currentMovie);
            return `
            <div class="movie mr-1 mt-1 col-3">
            <div class="card">
              <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
              <div class="card-body d-flex pb-0">
                <h7 class="card-title" id="movie-title" style="font-size: .75rem;">${currentMovie.Title}</h7>
                <p class='btn btn-secondary' id='movie-year' style="height: 2rem; font-size: .75rem;">${currentMovie.Year}</p>
              </div>
              <div class="card-body d-flex justify-content-center" style="padding-top: 0;">
                <button class="btn btn-primary">Add</button>
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
            console.log('Hello');
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = renderMovies(movieData);
        }
    })
    
})

