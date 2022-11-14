/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title
    this.director = director
    this.budget = budget
  }
  wasExpensive() {
    return this.budget > 100000000 ? true : false
  }
}

const lordOfTheRings = new Movie('Lord of the rings', 'Peter Jackson', 93000000)
const piratesOfTheCaribbean = new Movie(
  'Pirates of the Caribbean',
  'Rob Marshall',
  410000000
)

console.log(lordOfTheRings.wasExpensive())
console.log(piratesOfTheCaribbean.wasExpensive())
