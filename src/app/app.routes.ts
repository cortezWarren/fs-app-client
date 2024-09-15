import { Routes } from '@angular/router';
import { HomePageComponent } from './components'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomePageComponent }
];
