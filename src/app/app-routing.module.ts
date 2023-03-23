import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'characters',
    component: CharactersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
