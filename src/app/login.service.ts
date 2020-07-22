import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // user = [
  //   {
  //     id: 1,
  //     name: 'prueba',
  //     userName: 'prueba',
  //     email: 'prueba@gmail.com',
  //     addres: '#dir',
  //     phone: 10,
  //     website: 'prueba.com',
  //     company: 'F&G Solutions'
  //   }
  // ];
  constructor(
    private http: HttpClient
  ) { }

  // loadDataUser(id: number){
  //   return this.user.find(item => id == item.id);
  // }
  getDataUser(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
