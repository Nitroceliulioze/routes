import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { MOVIES } from '../interface/data-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }
}
