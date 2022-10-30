/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = +budget;
  this.wasExpensive = function () {
    if (this.budget > 100_000_000) {
      return true;
    } else {
      return false;
    }
  };
}
const movie = new Movie("Titanic", "James Cameron", 50_000_000);
console.log(movie.wasExpensive());
