import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/imovie';
import { Subscription } from 'rxjs';

import { MovieService } from 'src/app/api/movie.service';
import { FavoriteMovieService } from 'src/app/services/favorite-movie.service';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie: IMovie;
  movieSee = {};
  moviesSee = [];
  favorite: boolean = false;
  see: boolean = false;

  processCode = null;

  public subs : Subscription;

  code = 'some sample string';
  generated = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    // public navParams: NavParams,
    private favoriteMovie: FavoriteMovieService,
    private movieApi: MovieService,
    // private databaseProvider: DatabaseService
  ) {}
 
  ngOnInit(){
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    const movieId = this.activatedRoute.snapshot.params['value'];
    this.getDetail(movieId);
  }

  getDetail(id: string) {
    this.subs = this.movieApi.getMoviesId(id).subscribe(
      data => {
        this.movie = data;
        this.favoriteMovie
          .isFavoriteMovie(this.movie)
          .then(value => (this.favorite = value));
      }
    )
  }

  saveFavorite() {
    this.favorite = !this.favorite;
    this.favoriteMovie.toogleFavoriteMovie(this.movie);
  }

  // loadMovieSeeData() {
  //   this.databaseProvider.getAllMovieSee().then(data => {
  //     this.moviesSee = data;
  //   })
  // }

  // addMovieSee() {
  //   this.databaseProvider.addMovieSee(this.movie.title)
  //   .then(data => {
  //     this.loadMovieSeeData();
  //   });
  //   this.movieSee = {};
  // }

  // saveMovieSee() {
  //   this.see = !this.see;
  //   this.databaseProvider.toogleMovieSee(this.movie.title);
  // }

  processQR() {
    const movieId = this.activatedRoute.snapshot.params['value'];
    this.processCode = movieId;
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
