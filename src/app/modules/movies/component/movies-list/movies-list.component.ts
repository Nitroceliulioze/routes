import { Component } from '@angular/core';
import { Movie } from 'src/app/modules/movies/interface/movie';
import { MoviesService } from 'src/app/modules/movies/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],

})
export class MoviesListComponent {
  movies!: Movie[];

  constructor(private moviesService: MoviesService) {}


  getMovies(): void {
    this.moviesService.getMovies().then(movies => this.movies = movies)
  }

  ngOnInit() {
    this.getMovies();
  }
}
