import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../shared/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  /**Base url for movies services */
  private baseUrl = '/movies';
  constructor(private http: HttpClient) {}
  /**Get movies service */
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.baseUrl);
  }
  /**Get movie by id */
  getMovieById(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.baseUrl}/${id}`);
  }
}
