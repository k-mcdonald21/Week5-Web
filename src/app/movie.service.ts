import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor() { }

  movieList = [
    { title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola' },
    { title: 'Whiplash', year: '2014', director: 'Damien Chazelle' },
    { title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock' }
  ];

  getMovies(){
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear})
  }
}
