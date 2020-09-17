

document.addEventListener('DOMContentLoaded', function(){
    function renderMovies(movieArray){
        const movieHtmlArray = movieArray.map((currentMovie) => {

            console.log(currentMovie);
            return `
            <div class="movie mr-1 mt-1 col-3">
            <div class="card h-85">
              <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
              <div class="card-body d-flex justify-content-around p-0 mt-1">
                <h7 class="card-title" id="movie-title" style="font-size: .75rem;">${currentMovie.Title}</h7>
                <p class='btn btn-secondary' id='movie-year' style="font-size: .75rem; padding: 0; margin: 0; height: 1.25rem;">${currentMovie.Year}</p>
              </div>
              <div class="card-body d-flex justify-content-center" style="padding: 0; margin: 0;">
                <button class="btn btn-primary m-1 p-1" style="font-size: .75rem;">Add</button>
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

