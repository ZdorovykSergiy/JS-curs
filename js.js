const numberOfFilms = +prompt('Сколько фильмов Ві уже просмотрели', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените фильм?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените фильм?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.table(personalMovieDB);