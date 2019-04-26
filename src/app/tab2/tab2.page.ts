import { Component } from '@angular/core';
import { IMovie } from '../interfaces/imovie';
import { NavController } from '@ionic/angular';
import { FavoriteMovieService } from '../services/favorite-movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoriteMovies: IMovie[] = [];
 
  constructor(
    public navCtrl: NavController,
    private favoriteMovieService: FavoriteMovieService
  ) {}
 
  ionViewDidLoad() {

  }
 
  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  private initFavoriteMovies() {
    this.favoriteMovieService
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }
 
  openDetailsPage(movie: IMovie) {
    let value = { 
      id: movie.id,
    }
    this.navCtrl.navigateForward(`/details/${value.id}`);
  }
}
