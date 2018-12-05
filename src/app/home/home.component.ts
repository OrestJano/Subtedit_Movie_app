import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../movies';
import { FavoritesService } from '../favorites.service';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Array<Movie>;
  public categories: Array<string> = ['All'];
  public categorySelected;
  public favs;

   // pager object
   pager: any = {};

   // paged items
   pagedMovies: any[];
  
  

  constructor(public router: Router,private api: ApiService, private fav: FavoritesService) { }

  ngOnInit() {
    this.api.getMovies().subscribe((results) => {
      this.movies = results;
      results.forEach((result) => {
        if (!this.categories.includes(result.category)) {
          this.categories.push(result.category);
        }
      });
    });
    this.getFavs();

    this.setMovies(1);
  }
  

  setMovies(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.api.getMovies(this.movies.length, page);

    // get current page of items
    this.pagedMovies = this.movies.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


  getFavs() {
    this.favs = this.fav.getFav();
  }

  selectCat(category) {
    this.categorySelected = category;
  }

  addToFav(movie) {
      this.fav.setFav(movie);
      this.getFavs();
  }

  removeFav(movie) {
    this.fav.removeFav(movie);
    this.getFavs();
  }

  showMore(id) {
    this.router.navigate(['/home', id]);
  }

}
