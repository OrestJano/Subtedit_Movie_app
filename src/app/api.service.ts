import { Injectable } from '@angular/core';
import { MOVIES } from './movie_data';
import { Observable, of } from 'rxjs';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
