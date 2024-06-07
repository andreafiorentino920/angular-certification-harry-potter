import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../core/services/harry-potter.service';
import { Router } from '@angular/router';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { FormatTimeService } from '../../shared/services/format-time.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  /** Subscription for the list of movies*/
  moviesSubscription$?: Subscription;
  /** List of movies*/
  movies: Partial<IMovie>[] = [];
  /**List of filtered movies */
  filteredMovies?: Partial<IMovie>[];
  /**Input title filter */
  titleFilter?: string;
  /**Input release date filter */
  releaseDateFilter?: string;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private formatTimeService: FormatTimeService
  ) {}

  ngOnInit(): void {
    /**Load movies list */
    this.getMoviesList();
  }

  /**
   * Method to get movies list
   */
  getMoviesList() {
    this.moviesSubscription$ = this.moviesService
      .getMovies()
      .subscribe((res) => {
        this.movies = res;
        this.filteredMovies = res;
      });
  }

  /**Method to filter movies by title and release date */
  filterMovies() {
    this.filteredMovies = this.movies.filter((movie) => {
      const matchesTitle: boolean =
        this.titleFilter && movie?.title
          ? movie.title.toLowerCase().includes(this.titleFilter.toLowerCase())
          : true;
      const matchesReleaseDate: boolean =
        this.releaseDateFilter && movie?.release_date
          ? movie.release_date.startsWith(this.releaseDateFilter)
          : true;
      return matchesTitle && matchesReleaseDate;
    });
  }

  /**
   * Method to go on details page of a movie
   * @param id - ID of the movie to retrieve details
   */
  goToMovieDetails(id: string): void {
    this.router.navigate(['/detail/' + id]);
  }
  /**
   * Method to convert minutes in hours and minutes
   * @param duration - movie's duration
   * @returns
   */
  convertMinutesToHoursAndMinutes(duration: string) {
    return this.formatTimeService.convertMinutesToHoursAndMinutes(duration);
  }
}
