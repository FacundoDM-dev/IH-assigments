// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log("---- iteracion N1 + Bonus ----");

const getAllDirectors = (moviesArray) => {
  let directorsDuplicate = moviesArray.map((movie) => movie.director);
  let directorsNoDuplicate = directorsDuplicate.filter((director, index) => {
    return directorsDuplicate.indexOf(director) === index;
  });
  return directorsNoDuplicate;
};
let allDirectors = getAllDirectors(movies);
console.log(allDirectors);
//
//
//
//
//
//
//

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
console.log("---- iteracion N2 ----");

function howManyMovies(moviesArray) {
  let dramaStevenMovies = moviesArray.filter((movie) => {
    if (!moviesArray.length === 0) return 0;
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return dramaStevenMovies.length;
}
let dramaStevenMovies = howManyMovies(movies);
console.log(dramaStevenMovies);
//
//
//
//
//
//
//

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
console.log("---- iteracion N3 ----");

function scoresAverage(moviesArray) {
  let totalScore = moviesArray.map((movie) => {
    return movie.score;
  });
  let suma = 0;
  if (totalScore.length === 0) return 0;
  for (let i = 0; i < totalScore.length; i++) {
    const numeroArray = totalScore[i];
    suma += numeroArray;
  }
  let average = suma / totalScore.length;
  return parseFloat(average.toFixed(2));
}
let scoreTotal = scoresAverage(movies);
console.log(scoreTotal);
//
//
//
//
//
//
//

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log("---- iteracion N4 ----");

function dramaMoviesScore(moviesArray) {
  let dramaMoviesGenre = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  let dramaMoviesScore = dramaMoviesGenre.map((movie) => {
    return movie.score;
  });
  let suma = 0;
  if (dramaMoviesScore.length === 0) return 0;
  for (let i = 0; i < dramaMoviesScore.length; i++) {
    const numeroArray = dramaMoviesScore[i];
    suma += numeroArray;
  }
  let average = suma / dramaMoviesScore.length;
  return parseFloat(average.toFixed(2));
}
let dramaMoviesScoreAverage = dramaMoviesScore(movies);
console.log(dramaMoviesScoreAverage);
//
//
//
//
//
//
//

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
console.log("---- iteracion N5 ----");

function orderByYear(moviesArray) {
  let orderByYear = moviesArray.map((movie) => movie);
  orderByYear.sort((a, b) => {
    if (a.year > b.year) {
      return a.year - b.year;
    } else return a.year - b.year;
  });
  return orderByYear;
}
let moviesOrderByYear = orderByYear(movies);
console.log(moviesOrderByYear);
//
//
//
//
//
//
//

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.log("---- iteracion N6 ----");

function orderAlphabetically(moviesArray) {
  let orderAlpha = moviesArray.map((movie) => movie.title);
  orderAlpha.sort();
  return orderAlpha.slice(0, 20);
}
let moviesOrderAlphabetic = orderAlphabetically(movies);
console.log(moviesOrderAlphabetic);
//
//
//
//
//
//
//

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
//
//
//
//
//
//
//

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
//
//
//
//
//
//
//
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
