import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { model } from './model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  modl:model

  private userSubject: BehaviorSubject<model>;
  
  private baseurl = "http://localhost:8080"
  constructor(private http:HttpClient,private router: Router) { }

  create(mo: model): Observable<Object>{
    return this.http.post(`http://localhost:8080/add`, mo);
  }

   getall(): Observable<model[]>{
    return this.http.get<model[]>("http://localhost:8080/findall");
  }

  getdatabyid(id: string): Observable<object>{
    return this.http.get<model>(`${this.baseurl}/${id}`);
  }

  delete(id: string): Observable<Object>{
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  login(username, password) {
    return this.http.post<model>("http://localhost:8080/login", {username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
        }

        logout() {
          // remove user from local storage and set current user to null
        
          localStorage.removeItem('user');
          this.userSubject.next(null);
          this.router.navigate(['/dashboard']);
      }
}
