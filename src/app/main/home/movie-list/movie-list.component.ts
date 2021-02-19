import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie.model';
//B1: Import servive vaò
import { MovieService } from 'src/app/core/services/movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[]= []
//Khai báo movie srvice trong contructor
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  //  this.movieList =  this.movieService.getMovieList()
  //  console.log(this.movieList)


  // this.movieService.getMovieListPromise().then((result) => {
  //   this.movieList = result;
  //   console.log(this.movieList)
  // })
  // .catch((error) =>{
  //   console.log(error)
  // })

  this.movieService
  .getMovieList()
  .subscribe({
    next: (result) => {
      this.movieList= result;
      console.log(this.movieList)
    },
    error: (error) => {
      console.log(error)
    },
    complete: () => {
      console.log("Done")
    }

  })
  }

}
