import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getDataUser(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  logInUser(user: any): Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

}
