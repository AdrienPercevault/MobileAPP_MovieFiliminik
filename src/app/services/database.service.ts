import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

// import 'rxjs/add/operator/map';
// import { BehaviorSubject, Subscription } from 'rxjs/Rx';

// import { Platform } from 'ionic-angular';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { SQLitePorter } from '@ionic-native/sqlite-porter';
// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // database: SQLiteObject;
  // private databaseReady: BehaviorSubject<boolean>;
  // public subs : Subscription;

  // constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
  //   this.databaseReady = new BehaviorSubject(false);
  //   this.platform.ready().then(() => {
  //     this.sqlite.create({
  //       name: 'ListOfMoviesDB.db',
  //       location: 'default'
  //     })
  //       .then((db: SQLiteObject) => {
  //         this.database = db;
  //         this.storage.get('database_filled').then(val => {
  //           if (val) {
  //             this.databaseReady.next(true);
  //           } else {
  //             this.fillDatabase();
  //           }
  //         });
  //       });
  //   });
  // }

  // fillDatabase() {
  //   this.subs = this.http.get('assets/dummyDump.sql')
  //     .map(res => res.text()).subscribe(sql => {
  //       this.sqlitePorter.importSqlToDb(this.database, sql)
  //         .then(data => {
  //           this.databaseReady.next(true);
  //           this.storage.set('database_filled', true);
  //         })
  //         .catch(e => console.error(e));
  //     });
  // }
 
  // toogleMovieSee(title: string) {
  //   if (this.isMovieSee(title)) {
  //     this.removeMovieSee(title)
  //   }
  //   else {
  //     this.addMovieSee(title)
  //   }
  // }

  // isMovieSee(title: string) {
  //   if (this.selectMovieSee(title) != null) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  // selectMovieSee(title: string) {
  //   let data = [title]
  //   return this.database.executeSql("SELECT * FROM movieSeeTable WHERE title = (?)", data).then(data => {
  //     console.log(data)
  //     return data;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return err;
  //   });
  // }

  // removeMovieSee(title) {
  //   let data = [title]
  //   return this.database.executeSql("DELETE FROM movieSeeTable WHERE title = (?)", data).then(data => {
  //     return data;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return err;
  //   });
  // }

  // addMovieSee(title) {
  //   let data = [title]
  //   return this.database.executeSql("INSERT INTO movieSeeTable (title) VALUES (?)", data).then(data => {
  //     return data;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return err;
  //   });
  // }
 
  // getAllMovieSee() {
  //   return this.database.executeSql("SELECT * FROM movieSeeTable", []).then((data) => {
  //     let moviesSee = [];
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         moviesSee.push({ title: data.rows.item(i).title });
  //       }
  //     }
  //     return moviesSee;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return [];
  //   });
  // }
 
  // getDatabaseState() {
  //   return this.databaseReady.asObservable();
  // }

  // ngOnDestroy(): void {
  //   if (this.subs) {
  //     this.subs.unsubscribe;
  //   }
  // }
}
