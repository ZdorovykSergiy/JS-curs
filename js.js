
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов Ві уже просмотрели', "");
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов Ві уже просмотрели', "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените фильм?', '');
                if(a != null && b != null && a != '' && b != '' && a.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                }  else{
                    console.log('error');
                    i--;
                }
            
            }
    },
    detectPersonalLevel = function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно много фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres = function (){
        let genres = prompt(` Ваш любимий жанр. ВВедите через запьятую`);
        
        if (genres == '' || genres == null){
            console.log('Вы ввели некорретные данные или не вели их вовсе')
        } else{
            personalMovieDB.genres.split(', ');
            personalMovieDB.genres.s
        }
        for( let i = 1; i < 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i} `);
        }

    }
};

