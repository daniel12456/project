const numberOfFilms = +prompt('How much film did you watched');

const personalMovieDB =  {
	count : numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private : false
};

const a = prompt('Last watched film?'), 
			b = prompt('rate it please'), 
			c = prompt('Last watched film?'), 
			d = prompt('rate it please'); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);