import { Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

export const routes: Routes = [
  { path: 'list', component: MovieListComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];
