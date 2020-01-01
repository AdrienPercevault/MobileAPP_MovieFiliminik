import { Subscription } from 'rxjs';
import { IMovie } from '../interfaces/imovie';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/movie.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public subs : Subscription;

  movies: IMovie[];
  page = 1;
  filter: String = "";

  scanCode = null;
  
  constructor(
    private navCtrl: NavController,
    private movieApiService: MovieService,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.getMovies();
  }

  getMovies() {
    this.page = 1;
    this.subs = this.movieApiService.getMovies(this.page.toString()).subscribe(data =>{
      this.movies = data.results;
    })
  }

  openDetailsPage(movie: IMovie) {
    let value = { 
      id: movie.id,
    }
    this.navCtrl.navigateForward(`/details/${value.id}`);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    let res;
    if (this.filter == "" || this.filter == null) {
      res = this.movieApiService.getMovies(this.page.toString())
    }
    else {
      res = this.movieApiService.searchMovies({filter: this.filter, page: this.page.toString()})
    }
    setTimeout(() => {
      this.subs = res.subscribe((data => {
        let newlist = data.results;
        newlist.forEach((movie)=>{
          this.movies.push(movie);
        });
      }));
      infiniteScroll.target.complete();
    }, 500);
  }

  ScanCode() {
    this.barcodeScanner.scan()
      .then(BarcodeData => {
        let value = {
          id: BarcodeData.text.toString()
        }     
        this.scanCode = BarcodeData.text;
        this.navCtrl.navigateForward(`/details/${value}`)
      .catch(e => console.log(e))
    })
  }

  movieFilter(paramsFilter:string){
    this.page = 1;
    console.log(paramsFilter)
    if (paramsFilter != "") {
      this.filter = paramsFilter;
      this.subs = this.movieApiService.searchMovies({filter: paramsFilter, page: this.page.toString()}).subscribe(
      data =>{
        this.movies = data.results;
      },
      error =>{
        console.log(error);
      }
    )}
    else {
      this.getMovies();
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
