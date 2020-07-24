import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
