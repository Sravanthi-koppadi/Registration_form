import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { Success } from './success/success';


@Component({
  selector: 'app-root',
  standalone: true,
  // REMOVED 'User' from imports below
  imports: [ RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {

}