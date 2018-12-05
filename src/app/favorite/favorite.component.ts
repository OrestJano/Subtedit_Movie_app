import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Movie } from '../movies';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  
})
export class FavoriteComponent implements OnInit {
  public favData: Array<Movie>;
  id: number;
  movie;
  url

  constructor(private fav: FavoritesService ,private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.favData = this.fav.getFav();

    this.getFav();
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  removeFav(movie) {
    this.fav.removeFav(movie);
    this.favData = this.fav.getFav();
  }
  getFav() {
    this.api.getMovies().subscribe((results) => {
      results.map(result => {
        if (this.id === result.id) {
          this.movie = result;
          this.url = result.trailer;
        }
      })
      console.log(this.movie);
    });
  }

}
