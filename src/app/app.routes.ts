import { Routes } from '@angular/router';
import { Success } from './success/success';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Register } from './register/register';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'success', component: Success }
];
