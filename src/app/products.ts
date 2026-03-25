import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private http:HttpClient){}
  getUsers():Observable<AppUser[]>{
    const url='http://localhost:3000/users';
    return this.http.get<AppUser[]>(url);
  }
  saveUsers(user:AppUser):Observable<AppUser[]>{
    const url='http://localhost:3000/users';
    return this.http.post<AppUser[]>(url,user);
  }
  
}
