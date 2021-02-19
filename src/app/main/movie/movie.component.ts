import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
// import { MovieDetail } from  'src/app/core/model/movie.model'
import { ActivatedRoute } from "@angular/router"
import { MovieDetail } from 'src/app/core/model/movie.model';
import { Movie, Showtimes } from  'src/app/core/model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieDetail: Movie | null = null ;
  showTimes: Showtimes[] = [];
  
  constructor(
    private movieService: MovieService, 
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log(params)
       // B2: Dùng mã phim gọi API lấy thông tin phim
       this.movieService.getMovieDetail(params.movieID).subscribe({
        next: (result) => {
          const { lichChieu, ...detail} = result;
          this.movieDetail= detail;
          this.showTimes = lichChieu;
          // this.movieDetail = result;
          console.log(this.movieDetail)
        },
        error: (error) => {
          console.log(error);
        },
      });
      }
    })
  }

}
