import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../model/movie.model';
import { Observable, Subscriber } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }


  getMovieList(): Observable <Movie[]> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'

    return this.http.get<Movie[]>(url)
  }

  getMovieDetail(movieID: string): Observable <MovieDetail> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`;
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;
  
    let params = new HttpParams()
    params = params.append('maPhim', movieID);

    return this.http.get<MovieDetail>(url, { params })
  }
  // getMovieListPromise(): Promise<Movie[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         { id: 1, name: "Average", price: 88000 },
  //         { id: 2, name: "Wonder Woman", price: 98000 },
  //         { id: 3, name: "Iron Man", price: 80000 }
  //       ])
  //       // reject ("Lỗi rồi")
  //     }, 300)
  //   })
  // }

  // getMovieListObservable(): Observable<Movie[]> {
  //   return new Observable((subscribe) => {
  //     setTimeout(() => {
  //       subscribe.next([
  //         { id: 1, name: 'Avenger', price: 80000 },
  //         { id: 2, name: 'Wonder woman', price: 80000 },
  //         { id: 3, name: 'Iron man', price: 80000 },
  //       ]);
  //       // subscribe.error("Lỗi rồi");
  //       subscribe.complete()
  //     }, 3000);
  //   })
  // }
}
