import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.component.html',
  styleUrls: ['./showmore.component.css']
})
export class ShowmoreComponent implements OnInit {
  id: number;
  movie;
  url

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.getMovie();
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url); 
  }

  getMovie() {
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
