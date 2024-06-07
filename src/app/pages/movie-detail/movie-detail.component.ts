import { Component, OnDestroy } from '@angular/core';
import { MoviesService } from '../../core/services/harry-potter.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { FormatTimeService } from '../../shared/services/format-time.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnDestroy {
  /**Movie */
  movie?: IMovie;
  /**Route param subscription */
  paramSubscription$?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private formatTimeService: FormatTimeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    /**Check if id is in route param and call get movie by id service */
    this.paramSubscription$ = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getMovieById(id);
      }
    });
  }
  /**Method to get movie by id from service*/
  getMovieById(id: string) {
    this.moviesService.getMovieById(id).subscribe((movie) => {
      this.movie = movie;
    });
  }
  /**Method to go on previous page */
  goBack(): void {
    this.location.back();
  }
  /**Method to convert minutes in hour and minutes */
  convertMinutesToHoursAndMinutes(duration: string) {
    return this.formatTimeService.convertMinutesToHoursAndMinutes(duration);
  }
  /**Method wich is called when page is destroy */
  ngOnDestroy(): void {
    this.paramSubscription$?.unsubscribe();
  }
}
