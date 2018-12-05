import { Injectable } from '@angular/core';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public fav: Array<Movie> = [];

  constructor() { }

  setFav(movie: Movie) {
    this.fav.push(movie);
  }

  getFav() {
    return this.fav;
  }

  removeFav(movie: Movie) {
    const index = this.fav.findIndex(value => value.id === movie.id)
    this.fav.splice(index, 1);
  }
}
